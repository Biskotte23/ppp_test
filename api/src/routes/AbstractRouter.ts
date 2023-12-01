import express, { Router } from 'express';

/**
 * Abstract Router.
 */
export default abstract class AbstractRouter {
  /**
   * Router.
   */
  protected readonly _router: Router;

  /**
   * Initialize the router.
   */
  protected constructor() {
    this._router = express.Router();
    this.initializeRoutes();
  }

  /**
   * Initialize routes.
   */
  protected abstract initializeRoutes(): void;

  /**
   * Get router.
   * @returns {Router} Router.
   */
  public get router(): Router {
    return this._router;
  }
}
