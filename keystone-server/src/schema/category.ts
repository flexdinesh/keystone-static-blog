import { list } from '@keystone-6/core';
import { select, relationship } from '@keystone-6/core/fields';

export const Category = list({
  fields: {
    name: select({
      validation: { isRequired: true },
      isIndexed: 'unique',
      type: 'enum',
      options: [
        { label: 'Blog', value: 'blog' },
        { label: 'Notes', value: 'notes' },
        { label: 'GitHub', value: 'github' },
        { label: 'Twitter', value: 'twitter' },
        { label: 'Dev.to', value: 'dev' },
        { label: 'Medium', value: 'medium' },
        { label: 'YouTube', value: 'youtube' },
        { label: 'Podcast', value: 'podcast' },
        { label: 'Talks', value: 'talk' },
      ],
      defaultValue: 'blog',
      ui: { displayMode: 'segmented-control' },
    }),
    posts: relationship({ ref: 'Post.category', many: true }),
    links: relationship({ ref: 'Link.category', many: true }),
  },
});
