import { list } from '@keystone-6/core';
import { text, select } from '@keystone-6/core/fields';

export const Config = list({
  ui: {
    description: 'Layout configuration to decide how your website looks.',
    label: 'Config',
    singular: 'Config',
    plural: 'Config',
    labelField: 'uniqueField',
  },
  fields: {
    uniqueField: text({
      validation: { isRequired: true },
      ui: {
        itemView: { fieldMode: 'hidden' },
      },
      isIndexed: 'unique',
      defaultValue: 'config',
      hooks: {
        validateInput: async ({ operation, resolvedData, addValidationError }) => {
          if (operation === 'create' && resolvedData.uniqueField !== 'config') {
            addValidationError('Config already created.');
          }
        },
      },
    }),
    theme: select({
      validation: { isRequired: true },
      graphql: {
        read: {
          isNonNull: true,
        },
        create: {
          isNonNull: true,
        },
      },
      type: 'enum',
      options: [
        { label: 'Sleek', value: 'sleek' },
        { label: 'Newspaper', value: 'newspaper' },
        { label: 'Cardboard', value: 'cardboard' },
      ],
      defaultValue: 'sleek',
    }),
    homepageFeedStyle: select({
      validation: { isRequired: true },
      graphql: {
        read: {
          isNonNull: true,
        },
        create: {
          isNonNull: true,
        },
      },
      type: 'enum',
      options: [
        { label: 'Flat', value: 'flat' },
        { label: 'Grouped', value: 'grouped' },
      ],
      defaultValue: 'flat',
    }),
  },
});
