/**
 * Custom error.
 */
export default class CustomError extends Error {
  /**
   * Error status code.
   */
  public code: number;

  /**
   * Create a custom error.
   * @param {number} code - Status code of the error.
   * @param {string} message - Message of the error.
   * @param {string | undefined} stack - Stack of the error.
   */
  constructor(code: number, message: string, stack?: string) {
    super();
    this.code = code;
    this.name = this.getName(code);
    this.message = message;
    this.stack = stack;
  }

  public static notInArray(array: string[], param: string) {
    const arrayLength = array.length;
    let optionList = '';

    array.forEach((option, index) => {
      optionList += `'${option}'`;

      if (arrayLength > 1 && index === arrayLength - 2) {
        optionList += ' and ';
      }

      if (index < arrayLength - 2) {
        optionList += ', ';
      }
    });

    return new CustomError(
      422,
      `The \`${param}\` parameter's value is incorrect. Supported options are ${optionList}.`
    );
  }

  /**
   * Get error name according to its status code.
   * @param {number} code Status code.
   * @returns {string} Error name.
   */
  private getName(code: number): string {
    switch (code) {
      case 400:
        return 'Bad request';
      case 404:
        return 'Not found';
      case 422:
        return 'Unprocessable Content';
      case 501:
        return 'Not implemented';
      default:
        return 'Error';
    }
  }
}
