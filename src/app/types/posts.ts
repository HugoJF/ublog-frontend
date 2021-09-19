export type PostProperties = {
  slug: string;
  body: string;
  title: string;
  abstract: string;
  public: boolean;
}

export type PostComputedProperties = {
  PK: string;
  SK: string;
  version: number;
}

export type Post = PostProperties & PostComputedProperties;
