import { Module } from '@nestjs/common';
import { GitHubRepositoryRepository } from './infrastructure/repositories/gitHubRepository.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [GitHubRepositoryRepository],
})
export class UserRoleModule {}
