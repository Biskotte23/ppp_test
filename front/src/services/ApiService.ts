import { Configuration } from '../generated/api';
import { BaseAPI } from '../generated/api/base';

/**
 * PolyBay API service.
 */
export default abstract class MonitorApiService<T extends BaseAPI> {
  /**
   * API URI.
   */
  private uri = import.meta.env.VITE_API_URI;

  /**
   * PolyBay API to manage events.
   */
  protected api: T;

  /**
   * Initialize the API.
   */
  public constructor(apiConstructor: new (configuration: Configuration) => T) {
    const configuration = new Configuration({
      basePath: `${this.uri}/api/v1`
    });

    this.api = new apiConstructor(configuration);
  }
}
