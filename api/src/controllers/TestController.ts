import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';

import { TestDTO } from '../dto/Test.dto';
import TestService from '../services/TestService';

/**
 * Test controller.
 */
@Route('/tests')
@Tags('Tests')
export class EventController extends Controller {
  /**
   * Get all tests.
   * @returns {Promise<string>} Tests.
   */
  @Get('/')
  @SuccessResponse(200, 'Recovered')
  public async getAllTests(): Promise<TestDTO[]> {
    const tests = await TestService.getAllTests();

    this.setStatus(200);
    return tests;
  }
}
