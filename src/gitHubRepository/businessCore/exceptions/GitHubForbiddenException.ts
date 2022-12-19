import { HttpStatus } from '@nestjs/common';
import { BaseException, BaseExceptionCode } from './BaseException';

export class GitHubForbiddenException extends BaseException {
  constructor() {
    super({
      status: HttpStatus.FORBIDDEN,
      message: GitHubForbiddenException.getMessage(),
      code: BaseExceptionCode.GITHUB_API_FORBIDDEN,
    });
  }

  static getMessage(): string {
    return `Api is not available`;
  }
}
