import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IGitHubRepositoryRepository } from '../../businessCore/repositories/gitHubRepository.repository,interface';
import { Observable, catchError, map } from 'rxjs';
import { Branch } from '../../../shared/interfaces/branch';
import { Commit } from '../../../shared/interfaces/commit';
import { GitHubForbiddenException } from '../../businessCore/exceptions/GitHubForbiddenException';

const apiBase = 'https://api.github.com/repos';

@Injectable()
export class GitHubRepositoryRepository implements IGitHubRepositoryRepository {
  constructor(
    private http: HttpService,
    public userName: string,
    public repository: string,
  ) {}

  async getBranchCommits(branch: string): Promise<Observable<Commit[]>> {
    return this.http
      .get(`${apiBase}/${this.userName}/${this.repository}/commits/${branch}`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new GitHubForbiddenException();
        }),
      );
  }

  async getBranchs(): Promise<Observable<Branch[]>> {
    return this.http
      .get(`${apiBase}/${this.userName}/${this.repository}/branches`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new GitHubForbiddenException();
        }),
      );
  }
}
