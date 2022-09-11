import { list } from '@keystone-6/core';
import { select, relationship } from '@keystone-6/core/fields';

// TODO: Not used yet
export const Tag = list({
  fields: {
    name: select({
      validation: { isRequired: true },
      isIndexed: 'unique',
      type: 'enum',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      ui: { displayMode: 'segmented-control' },
    }),
    posts: relationship({ ref: 'Post.tags', many: true }),
    links: relationship({ ref: 'Link.tags', many: true }),
  },
});
