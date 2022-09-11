import { list } from '@keystone-6/core';
import { select } from '@keystone-6/core/fields';

// TODO: Not used yet
export const Config = list({
  ui: {
    description: 'Layout configuration on how your website looks.',
  },
  fields: {
    theme: select({
      validation: { isRequired: true },
      isIndexed: 'unique',
      type: 'enum',
      options: [{ label: 'Default', value: 'default' }],
      defaultValue: 'default',
    }),
  },
});
