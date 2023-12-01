import { getTestFromEntity, TestDTO } from '../dto/Test.dto';
import { DatabaseService } from './DatabaseService';

/**
 * Service to manage tests.
 */
export default class TestService {
  /**
   * Get all tests.
   * @returns {Promise<TestDTO[]>} Platform deployments.
   */
  public static async getAllTests(): Promise<TestDTO[]> {
    const tests = await DatabaseService.test.findMany({});

    return tests.map((t) => getTestFromEntity(t));
  }
}
