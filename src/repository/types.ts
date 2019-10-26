export enum StatusTypes {
  Public = "public",
  Private = "private"
}

export interface RepositoryProps {
  user: string;
  repositoryInfo: {
    name: string;
    description: string;
    status: StatusTypes;
  };
}
