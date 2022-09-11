import { list } from '@keystone-6/core';
import { select, timestamp, relationship, text } from '@keystone-6/core/fields';

export const Link = list({
  ui: {
    description:
      'Link an external post/tweet/media/video/etc another platform. Eg. Medium, Twitter, YouTube, etc.',
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    url: text({
      isIndexed: 'unique',
      validation: { isRequired: true },
      ui: {
        description: 'URL of the external post/tweet/media/video/etc.',
      },
    }),
    status: select({
      type: 'enum',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'published',
      ui: { displayMode: 'segmented-control' },
    }),
    category: relationship({ ref: 'Category.links', many: false }),
    // tags: relationship({ ref: 'Tag.links', many: true }),
    publishDate: timestamp(),
  },
});
