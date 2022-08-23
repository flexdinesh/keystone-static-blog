import { list } from '@keystone-6/core';
import { select, timestamp, relationship, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

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
    }),
    publishDate: timestamp(),
    author: relationship({ ref: 'User.posts', many: false }),
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
    }),
  },
});
