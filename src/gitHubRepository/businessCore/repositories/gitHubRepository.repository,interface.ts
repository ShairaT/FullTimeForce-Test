export interface IGitHubRepositoryRepository {
  getBranchCommits(branch: string): Promise<any>;
  getBranchs(): Promise<any>;
}
