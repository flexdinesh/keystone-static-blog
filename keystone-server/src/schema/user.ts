import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';

export const User = list({
  fields: {
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    name: text({ validation: { isRequired: true } }),
    github: text(),
    twitter: text(),
    posts: relationship({ ref: 'Post.author', many: true }),
  },
});
