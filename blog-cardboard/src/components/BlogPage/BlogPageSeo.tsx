import Head from 'next/head';
import React from 'react';
import type { BlogpageData } from '../../data/blogpage';

type BlogPageSeoProps = BlogpageData;
export function BlogPageSeo({ post, meta }: BlogPageSeoProps) {
  const derivedBlogPageTitle = meta?.name ? `${post.title} | ${meta?.name}` : post.title || '';
  const siteTitle = meta?.metaTitle || meta?.title;
  const derivedURL = post.slug ? `${meta?.metaUrl}/${post.slug}` : '';
  const twitterHandleForMetaTag = '@' + (meta?.twitter || '').replace('@', '');

  return (
    <React.Fragment>
      <Head>
        {derivedBlogPageTitle && <title>{derivedBlogPageTitle}</title>}
        {post.metaDescription && (
          <meta property="description" content={post.metaDescription} key="description" />
        )}
        {meta?.name && <meta property="article:author" content={meta?.name} key="og:author" />}

        {/* og meta tags */}
        {derivedBlogPageTitle && (
          <meta property="og:title" content={derivedBlogPageTitle} key="og:title" />
        )}
        {post.metaDescription && (
          <meta property="og:description" content={post.metaDescription} key="og:description" />
        )}
        {meta?.metaUrl && <meta property="og:url" content={derivedURL} key="og:url" />}
        {siteTitle && <meta property="og:site_name" content={siteTitle} key="og:site_name" />}
        <meta property="og:type" content="article" key="og:type" />
        {post.publishDate && (
          <meta
            property="article:published_time"
            content={post.publishDate}
            key="og:published_time"
          />
        )}
        {post.metaImageUrl && (
          <meta property="og:image" content={post.metaImageUrl} key="og:image" />
        )}
        {post.metaImageAltText && (
          <meta property="og:image:alt" content={post.metaImageAltText} key="og:image:alt" />
        )}
        {post.metaImageWidth && (
          <meta property="og:image:width" content={post.metaImageWidth} key="og:image:width" />
        )}
        {post.metaImageHeight && (
          <meta property="og:image:height" content={post.metaImageHeight} key="og:image:height" />
        )}
        {meta?.name && <meta property="article:author" content={meta?.name} key="og:author" />}

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {post.title && <meta property="twitter:title" content={post.title} key="twitter:title" />}
        {post.metaDescription && (
          <meta
            property="twitter:description"
            content={post.metaDescription}
            key="twitter:description"
          />
        )}
        {meta?.twitter && (
          <meta property="twitter:site" content={twitterHandleForMetaTag} key="twitter:site" />
        )}
        {meta?.twitter && (
          <meta
            property="twitter:creator"
            content={twitterHandleForMetaTag}
            key="twitter:creator"
          />
        )}
        {post.metaImageUrl && (
          <meta property="twitter:image" content={post.metaImageUrl} key="twitter:image" />
        )}
        {post.metaImageAltText && (
          <meta
            property="twitter:image:alt"
            content={post.metaImageAltText}
            key="twitter:image:alt"
          />
        )}
      </Head>
    </React.Fragment>
  );
}
