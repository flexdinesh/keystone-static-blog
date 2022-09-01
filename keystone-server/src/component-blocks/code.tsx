/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { component, fields } from '@keystone-6/fields-document/component-blocks';

export const code = component({
  label: 'Code Block',
  schema: {
    content: fields.child({
      kind: 'block',
      formatting: {
        blockTypes: 'inherit',
        softBreaks: 'inherit',
      },
      placeholder: 'Code goes here...',
    }),

    language: fields.select({
      label: 'Code language for syntax highlighting',
      options: [
        { label: 'css', value: 'css' },
        { label: 'js', value: 'js' },
        { label: 'jsx', value: 'jsx' },
        { label: 'html', value: 'html' },
      ],
      defaultValue: 'jsx',
    }),
  },
  preview: function Quote(props) {
    return (
      <pre>
        <code>{props.fields.content.element}</code>
      </pre>
    );
  },
});
