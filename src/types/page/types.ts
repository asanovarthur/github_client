export enum StatusTypes {
  Public = "public",
  Private = "private"
}

export interface PageProps {
  repository: {
    name: string;
    description: string;
    status: StatusTypes;
  };
}
