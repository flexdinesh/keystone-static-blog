export type Post = {
  __typename: 'Post';
  id: string;
  title: string;
  slug: string;
  publishDate: string;
};

export type ExternalLink = {
  __typename: 'ExternalLink';
  id: string;
  title: string;
  url: string;
  publishDate: string | null;
  type: 'dev' | 'twitter' | 'medium' | 'youtube' | 'podcast';
  author: Author;
};

type Author = {
  email: string;
  name: string;
  github: string;
  twitter: string;
};
