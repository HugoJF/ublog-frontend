export type PostProperties = {
  slug: string;
  body: string;
  title: string;
}

export type PostComputedProperties = {
  PK: string;
  SK: string;
  version: number;
}

export type Post = PostProperties & PostComputedProperties;
