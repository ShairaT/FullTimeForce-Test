import { HttpException } from '@nestjs/common/exceptions';

export enum BaseExceptionCode {
  Default = 'DEFAULT_DOMAIN_EXCEPTION',
  GITHUB_API_FORBIDDEN = 'GITHUB_API_FORBIDDEN_EXCEPTION',
}

export class BaseException extends HttpException {
  public code: string;
  constructor({
    status,
    message,
    code,
  }: {
    status: number;
    message: string;
    code?: string;
  }) {
    super(message, status);
    this.code = code || BaseExceptionCode.Default;
  }
}
