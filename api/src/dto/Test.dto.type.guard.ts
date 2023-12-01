/*
 * Generated type guards for "Test.dto.ts".
 * WARNING: Do not manually change this file.
 */
import { TestDTO } from './Test.dto';

function evaluate(isCorrect: boolean, varName: string, expected: string, actual: any): boolean {
  if (!isCorrect) {
    console.error(`${varName} type mismatch, expected: ${expected}, found:`, actual);
  }
  return isCorrect;
}

export function isTestDTO(obj: unknown, argumentName: string = 'testDTO'): obj is TestDTO {
  const typedObj = obj as TestDTO;
  return (
    ((typedObj !== null && typeof typedObj === 'object') || typeof typedObj === 'function') &&
    evaluate(
      typedObj['label'] === null || typeof typedObj['label'] === 'string',
      `${argumentName}["label"]`,
      'string | null',
      typedObj['label']
    )
  );
}
