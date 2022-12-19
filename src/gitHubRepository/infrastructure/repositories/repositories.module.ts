import { Module } from '@nestjs/common';
import { GitHubRepositoryRepository } from './gitHubRepository.repository';

@Module({
  imports: [],
  providers: [],
  exports: [GitHubRepositoryRepository],
})
export class RepositoriesModule {}
