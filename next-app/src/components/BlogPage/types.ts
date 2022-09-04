import type { DocumentRendererProps } from '@keystone-6/document-renderer';

export type DocumentProp = DocumentRendererProps['document'];

export type Post = {
  id: string;
  title: string;
  slug: string;
  publishDate: string | null;
  metaDescription: string | null;
  metaImageUrl: string | null;
  metaImageAltText: string | null;
  author: {
    email: string;
    name: string;
    github: string;
    twitter: string;
  };
  content: {
    document: DocumentProp;
  };
};
