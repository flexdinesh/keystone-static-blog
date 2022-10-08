/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { Context } from '.keystone/types';

async function backupConfig(context: Context) {
  const { query } = context.sudo();
  const configInDatabase = await query.Config.findMany({
    query: 'uniqueField homepageFeedStyle',
  });
  const json = JSON.stringify(configInDatabase, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/config.json'), json, 'utf8');
}

async function backupMeta(context: Context) {
  const { query } = context.sudo();
  const metaInDatabase = await query.Meta.findMany({
    query:
      'uniqueField name title about { document } github twitter metaTitle metaDescription metaImageUrl metaImageAltText metaImageWidth metaImageHeight metaUrl',
  });
  const json = JSON.stringify(metaInDatabase, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/meta.json'), json, 'utf8');
}

async function backupCategories(context: Context) {
  const { query } = context.sudo();
  const categoriesInDatabase = await query.Category.findMany({
    query: 'name',
  });
  const json = JSON.stringify(categoriesInDatabase, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/categories.json'), json, 'utf8');
}

async function backupPosts(context: Context) {
  const { query } = context.sudo();
  const postsInDatabase = await query.Post.findMany({
    query:
      'title slug status category { name } publishDate metaDescription metaImageUrl metaImageAltText metaImageWidth metaImageHeight content { document }',
  });
  const postsWithCategoryConnect = postsInDatabase.map(post => ({
    ...post,
    category: post?.category?.name && { connect: { name: post.category.name } },
  }));
  const json = JSON.stringify(postsWithCategoryConnect, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/posts.json'), json, 'utf8');
}

async function backupLinks(context: Context) {
  const { query } = context.sudo();
  const linksInDatabase = await query.Link.findMany({
    query: 'title url status category { name } publishDate',
  });
  const linksWithCategoryConnect = linksInDatabase.map(link => ({
    ...link,
    category: link?.category?.name && { connect: { name: link.category.name } },
  }));
  const json = JSON.stringify(linksWithCategoryConnect, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/links.json'), json, 'utf8');
}

export async function backupToJSON(context: Context) {
  console.log(`💼 Back up data to JSON...`);
  await backupConfig(context);
  await backupMeta(context);
  await backupCategories(context);
  await backupPosts(context);
  await backupLinks(context);
  console.log(`💼 Back up data to JSON completed.`);
}
