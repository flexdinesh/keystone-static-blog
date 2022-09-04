# Static Blogs with Keystone

<p align="center">
    <img src="next-app/public/images/meta-image.png" alt="Static Blogs with Keystone" width="75%"/>
</p>

This is a starter template to build statically generated blog-like websites with [Keystone](https://keystonejs.com/) and [Next.js](https://nextjs.org/). The template is built with and styled using [Tailwind's configuration based theme](https://tailwindcss.com/docs/theme) which makes it easy to extend and customise it.

> Check it out here — [Static Blogs with Keystone](https://staticblogswithkeystone.netlify.app).


## How does it work?

The short version is that the blog is entirely generated during build-time using Next.js static site generation and the content for the blog is made available during build-time using Keystone's powerful content platform along with the magic of zero configuration file-system based SQLite database.

- The blog is generated statically using [Next.js static HTML export](https://nextjs.org/docs/advanced-features/static-html-export).

- The content for the blog is fetched from a [local Keystone server](https://keystonejs.com). Keystone is a fantastic content platform that auto-magically generates GraphQL API based on schema definitions.

- Usually content platforms need to be connected to a database and hosted somewhere which often comes with hosting, configuration and maintenance cost. [Keystone supports SQLite database](https://keystonejs.com/docs/apis/config#sqlite) and we make use of that to avoid having to configure, host or maintain anything. **You can get started with zero configuration and commit your database along with your code like any other file.** 🤯 This is what makes this whole _generate blogs locally without having to host a server anywhere_ possible.

- Author your content visually in your local environment using [Keystone's powerful document editor](https://keystonejs.com/docs/guides/document-field-demo) and admin dashboard. Once your content is ready, just run a local build and your blog will be exported as a static website. Now you can easily host this static website anywhere. I created [my blog](https://dineshpandiyan.com) using this template and hosted it in [Netlify](https://www.netlify.com/). Every time I make a change to my content, all I gotta do is push my changes to the repo and Netlify automatically deploys it in less than a minute.

- The generated blog and content is styled using [Tailwind](https://tailwindcss.com/) and could be easily customised easily.

## How is this different from mdx based blogs?

The idea is same - you statically generate your blog using content made available during build-time. The difference however, is that, MDX authored content is passed through a plugin system during the build and the content is made available in your pages to be built. This is easy as long as you only need the default out-of-the-box markdown syntax content. The moment you want to customise your content with fancier components (Eg. carousel, YouTube video, Twitter embed, syntax highlighted code, Hero image, etc) you will either have to find a plugin that supports that or build them yourself which sometimes can get quite cumbersome.

This is where [Keystone's all powerful document field](https://keystonejs.com/docs/guides/document-field-demo#document-fields-demo) comes into play. You can author content using a visual editor and see how your content is going to look while authoring it. And most importantly Keystone's document field makes it easy to add custom components (Eg. carousel, YouTube video, Twitter embed, syntax highlighted code, Hero image, etc). All you need to know to add a custom component is to know how to code in React and voila. 🥳 This template is setup with a few custom components (hero image, custom blockquote, embed tweet, embed youtube videos, callouts and syntax highlighted code blocks). You can see them in action here — [TODO-add deployed blog post about authoring](https://TODO).

Keystone's document editor stands out in a handful of ways over MDX based content —

- Ability to visually see your content while authoring it.

- Keystone's admin dashboard makes it easy to publish/unpublish content, go through all your content visually for editing, author SEO information along with your post, etc.

- Complete control over how you render and style your content. Default out-of-the-box elements and your custom elements can be styled however you want.

- Multi-column layouts for your content.

- And more. Keystone's document editor is friggin' fantastic.

## Getting started

The project is a monorepo with Keystone server in `keystone-server` workspace and the next frontend in `next-app` workspace.

1. `yarn` at project root installs the dependencies for both the server and the frontend app.

2. `yarn dev` at project root starts the Keystone server at http://localhost:3000 and the next app at http://localhost:8000

_You can alternatively open two terminal tabs and run yarn dev individually within `keystone-server` and `next-app` directories_.

### Authoring content

Open your keystone admin dashboard locally at http://localhost:3000 and start authoring content.

- If you want to create a new blog post, you can create one in **Posts**.

- If you want to link to an external blog post or a link you can create one in **External Links**.

### Generating blog

Once your content is ready, keep the keystone server running and open the Next.js app at http://localhost:8000.

- Generate your blog by running `yarn export`. This will export your website in `next-app/out` directory.

- You can check out your generated content locally by running `yarn serve` in `next-app` dir.

### Deploying

The generated website is just a bunch of html, js and css files. You can host it where ever you want.

**What about generating the files in a CI?**

You don't have to do that. Only the files in `next-app/out/` matters. Since your Keystone works fine locally and you can commit your database to your repo, you can generate your website locally every time you add/edit/remove content and push the generated files to your repo. Take a look at [my repo's commit history](https://github.com/flexdinesh/dineshpandiyan.com/commits/main) for my [website](https://dineshpandiyan.com), every time I make content change, I push the newly exported files to my repo and Netlify automatically picks them up deploys the newly generated files.

If you don't want to generate your blog locally and instead do it in a CI, you gotta figure out how to run the keystone server in your CI, generate your blog and exit the Keystone server once done.

## Where do I deploy?

The generated website is just a bunch of html, js and css files. You can host it where ever you want. Here are a few options that will automatically deploy the website as soon as you push the generated files to your repo.

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Fastly](https://docs.fastly.com/en/fundamentals/1-introduction)
- [AWS S3](https://aws.amazon.com/s3/)

## License

MIT © Dinesh Pandiyan
