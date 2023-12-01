import swaggerUi from 'swagger-ui-express';

import * as swaggerDocument from '../generated/swagger.json';
import AbstractRouter from './AbstractRouter';

/**
 * Rooter for generic routes.
 */
export default class GenericRouter extends AbstractRouter {
  /**
   * Route.
   */
  static readonly route: string = '/api/v1';

  constructor() {
    super();
  }

  protected initializeRoutes() {
    // Display API version 1 documentation.
    this._router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}
