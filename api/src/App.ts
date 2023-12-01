import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { ValidateError } from 'tsoa';

import { RegisterRoutes } from './generated/routes';
import CustomError from './models/CustomError';
import GenericRouter from './routes/GenericRouter';
import { jsonError } from './utils/HttpResponseUtils';

/**
 * Chapitô monitor API.
 */
export default class App {
  /**
   * Express server.
   */
  private readonly _server: Express;

  /**
   * Initialize the API.
   */
  constructor() {
    this._server = express();

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.manageErrors();
    this.configJsonSpaces();
  }

  /**
   * Initialize middlewares.
   */
  private initializeMiddlewares() {
    // Retrieves JSON from the query body and stores it as an object in the query.
    this._server.use(express.json({ inflate: false }));

    // Print logs.
    this._server.use(morgan('dev'));

    // Enable all CORS requests.
    this._server.use(cors());
  }

  /**
   * Initialize routes.
   */
  private initializeRoutes() {
    this._server.use(GenericRouter.route, new GenericRouter().router);

    // Routes generated by TSA0.
    RegisterRoutes(this._server);
  }

  /**
   * Manage errors.
   */
  private manageErrors() {
    // Not found handler.
    this._server.use((req: Request, res: Response) => {
      jsonError(res, 404, 'Not Found');
    });

    // Error handler.
    this._server.use(
      (err: CustomError, req: Request, res: Response, next: NextFunction): Response | void => {
        const env = process.env.NODE_ENV || 'production';

        if (err instanceof ValidateError) {
          return res.status(422).json({
            code: 422,
            message: 'Validation Failed',
            details: err?.fields
          });
        }

        if (err instanceof Error) {
          if (env === 'production') {
            jsonError(res, err.code || 500, err.message);
          } else {
            jsonError(res, err.code || 500, err.message, err.stack);
          }
        }

        next();
      }
    );
  }

  /**
   * Configure JSON spaces.
   */
  private configJsonSpaces() {
    this._server.set('json spaces', 4);
  }

  /**
   * Get Express server instance.
   * @returns {Express} Express server instance.
   */
  public get server(): Express {
    return this._server;
  }
}
