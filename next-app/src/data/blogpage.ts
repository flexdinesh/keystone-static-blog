import { fetchGraphQL, gql } from '../graphql';
import type { BlogpageQuery } from '../.generated/types';

export type BlogpageData = {
  post: NonNullable<BlogpageQuery['post']>;
  meta: NonNullable<BlogpageQuery['metas']>[number] | null;
};

export async function fetchBlogpageData(slug: string): Promise<BlogpageData> {
  const data: BlogpageQuery = await fetchGraphQL(
    gql`
      query blogpage($slug: String!) {
        post(where: { slug: $slug }) {
          __typename
          id
          title
          slug
          status
          category {
            name
          }
          publishDate
          metaDescription
          metaImageUrl
          metaImageAltText
          metaImageWidth
          metaImageHeight
          content {
            document
          }
        }
        metas {
          __typename
          id
          email
          name
          github
          twitter
          metaTitle
          metaUrl
        }
      }
    `,
    {
      slug,
    }
  );

  const post = data?.post as BlogpageData['post'];
  const meta = data?.metas?.length ? data?.metas[0] : null;

  return {
    post,
    meta,
  };
}