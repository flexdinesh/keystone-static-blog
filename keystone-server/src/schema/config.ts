import { list } from '@keystone-6/core';
import { select } from '@keystone-6/core/fields';

export const Config = list({
  ui: {
    label: 'Config',
    singular: 'Config',
    plural: 'Config',
    description: 'Layout configuration to decide how your website looks.',
  },
  fields: {
    theme: select({
      validation: { isRequired: true },
      isIndexed: 'unique',
      type: 'enum',
      options: [{ label: 'Default', value: 'default' }],
      defaultValue: 'default',
    }),
    homepageFeedStyle: select({
      validation: { isRequired: true },
      type: 'enum',
      options: [
        { label: 'Flat', value: 'flat' },
        { label: 'Grouped', value: 'grouped' },
      ],
      defaultValue: 'flat',
    }),
  },
});
