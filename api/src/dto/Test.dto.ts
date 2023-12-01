import { Test } from '@prisma/client';

import * as Guards from './Test.dto.type.guard';

/**
 * Test DTO.
 * @see {isTestDTO} ts-auto-guard:type-guard
 */
export type TestDTO = Omit<Test, 'id'>;

/**
 * Convert Test instance into TestDTO instance.
 * @param {Test} test Test entity.
 * @returns TestDTO instance.
 */
export function getTestFromEntity(test: Test): TestDTO {
  return {
    label: test.label
  };
}
export { Guards };
