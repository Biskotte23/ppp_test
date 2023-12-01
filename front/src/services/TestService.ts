import { createContext } from 'react';
import { TestsApi, PickTestExcludeKeyofTestId as TestDTO } from '../generated/api';
import ApiService from './ApiService';

/**
 * Service to get tests.
 */
export class TestService extends ApiService<TestsApi> {
  public constructor() {
    super(TestsApi);
  }

  /**
   * Get test list.
   * @returns Tests.
   */
  public async getTests(): Promise<TestDTO[]> {
    let tests: TestDTO[] = [];

    try {
      const response = await this.api.getAllTests();
      tests = response.data;
    } catch (e) {
      throw new Error(`An error occurred during the query: ${e}`);
    }

    return tests;
  }
}

export const testService = new TestService();

export const TestServiceContext = createContext<TestService>(testService);
