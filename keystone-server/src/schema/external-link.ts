import { list } from '@keystone-6/core';
import { select, timestamp, relationship, text } from '@keystone-6/core/fields';

export const ExternalLink = list({
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
    publishDate: timestamp(),
    type: select({
      type: 'enum',
      options: [
        { label: 'GitHub', value: 'github' },
        { label: 'Twitter', value: 'twitter' },
        { label: 'Dev.to', value: 'dev' },
        { label: 'Medium', value: 'medium' },
        { label: 'YouTube', value: 'youtube' },
        { label: 'Podcast', value: 'podcast' },
      ],
      ui: {
        displayMode: 'segmented-control',
        description: 'Used to display an icon next to the post to identify source.',
      },
    }),
    author: relationship({ ref: 'User.externalLinks', many: false }),
  },
});
