export interface Commit {
  sha: string;
  url: string;
  message: string;
  stats: {
    additions: number;
    deletions: number;
    total: number;
  };
  author: {
    name: string;
    email: string;
    profileImage: string;
  };
}
