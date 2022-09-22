import { fetchGraphQL, gql } from '../graphql';
import type { BlogpageQuery } from '../.generated/types';

export type BlogpageData = {
  post: NonNullable<BlogpageQuery['post']>;
  meta: BlogpageQuery['meta'];
  config: BlogpageQuery['config'];
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
        meta(where: { uniqueField: "meta" }) {
          __typename
          id
          title
          about {
            document
          }
          name
          github
          twitter
          metaTitle
          metaUrl
        }
        config(where: { uniqueField: "config" }) {
          __typename
          id
          theme
          homepageFeedStyle
        }
      }
    `,
    {
      slug,
    }
  );

  const post = data?.post as BlogpageData['post'];
  const meta = data?.meta;
  const config = data?.config;

  return {
    post,
    meta,
    config,
  };
}
