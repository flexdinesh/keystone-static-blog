import path from 'path';
import { list } from '@keystone-6/core';
import { select, timestamp, relationship, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { componentBlocks } from '../component-blocks/post';

export const Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    status: select({
      type: 'enum',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      ui: { displayMode: 'segmented-control' },
    }),
    category: relationship({ ref: 'Category.posts', many: false }),
    // tags: relationship({ ref: 'Tag.posts', many: true }),
    publishDate: timestamp(),
    metaDescription: text({
      ui: {
        displayMode: 'textarea',
        description:
          '(OPTIONAL) Used for SEO - description, og:description and twitter:description.',
      },
    }),

    metaImageUrl: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image and twitter:image.',
      },
    }),
    metaImageAltText: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image:alt and twitter:image:alt.',
      },
    }),
    metaImageWidth: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image:width. Eg. 1920.',
      },
    }),
    metaImageHeight: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image:height.Eg. 1080.',
      },
    }),
    content: document({
      // a fully featured document editor with all of the formatting abilities
      formatting: true,
      dividers: true,
      links: true,
      // grid layout options
      layouts: [
        [1, 1], // grid layout 1fr 1fr
        [1, 1, 1], // grid layout 1fr 1fr 1fr
      ],
      ui: {
        views: path.join(process.cwd(), './src/component-blocks/post'),
      },
      componentBlocks,
    }),
  },
});
