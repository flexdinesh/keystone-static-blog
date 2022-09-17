import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export const Meta = list({
  ui: {
    description: "Website and SEO information. Don't create a new entry, just update existing.",
    label: 'Meta',
    singular: 'Meta',
    plural: 'Meta',
  },
  fields: {
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    title: text({
      validation: { isRequired: true },
      ui: {
        description:
          'Website title. Used in website. Used in page title and SEO - og:title and twitter:title.',
      },
    }),
    about: document({
      formatting: {
        blockTypes: {
          blockquote: true,
        },
        inlineMarks: {
          bold: true,
          italic: true,
          underline: true,
          strikethrough: true,
          code: true,
        },
        softBreaks: true,
      },
      links: true,
    }),
    name: text({
      validation: { isRequired: true },
      ui: {
        description: 'Your name. Used in website. Used for SEO - twitter:site and twitter:creator.',
      },
    }),
    github: text({
      label: 'GitHub Username',
      ui: {
        description: '(OPTIONAL) Used in website. Eg. flexdinesh.',
      },
    }),
    twitter: text({
      label: 'Twitter Handle',
      ui: {
        description:
          '(OPTIONAL) Used in website. Used for SEO - twitter:site and twitter:creator. Eg. flexdinesh.',
      },
    }),
    metaTitle: text({
      ui: {
        description:
          '(OPTIONAL) Provide if you want to use a separate title in meta tags. Used in page title and SEO - og:title and twitter:title.',
      },
    }),
    metaDescription: text({
      ui: {
        displayMode: 'textarea',
        description:
          '(OPTIONAL) Used for SEO - description, og:description and twitter:description.',
      },
    }),
    metaImageUrl: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image and twitter:image.',
      },
    }),
    metaImageAltText: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image:alt and twitter:image:alt.',
      },
    }),
    metaImageWidth: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image:width. Eg. 1920.',
      },
    }),
    metaImageHeight: text({
      ui: {
        description: '(OPTIONAL) Used for SEO - og:image:height. Eg. 1080.',
      },
    }),
    metaUrl: text({
      ui: {
        description:
          "(OPTIONAL) Homepage URL of the deployed website (leave empty if you don't know it yet). Used in SEO - og:url.",
      },
    }),
  },
});
