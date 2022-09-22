/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { Context } from '.keystone/types';

async function seedCategories(context: Context) {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(
    path.join(process.cwd(), './src/seed/categories.json'),
    'utf-8'
  );
  const seedCategories: any[] = JSON.parse(rawJSONData);
  const categoriesAlreadyInDatabase = await db.Category.findMany({
    where: {
      name: { in: seedCategories.map(category => category.name) },
    },
  });
  const categoryToCreate = seedCategories.filter(
    seedCategory => !categoriesAlreadyInDatabase.some(c => c.name === seedCategory.name)
  );
  await db.Category.createMany({
    data: categoryToCreate,
  });
}

async function seedConfig(context: Context) {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(path.join(process.cwd(), './src/seed/config.json'), 'utf-8');
  const seedConfig: any[] = JSON.parse(rawJSONData);
  const configAlreadyInDatabase = await db.Config.findMany();

  if (!configAlreadyInDatabase.length) {
    await db.Config.createMany({
      data: seedConfig,
    });
  }
}

async function seedMeta(context: Context) {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(path.join(process.cwd(), './src/seed/meta.json'), 'utf-8');
  const seedMeta: any[] = JSON.parse(rawJSONData);
  const metaAlreadyInDatabase = await db.Meta.findMany();

  if (!metaAlreadyInDatabase.length) {
    await db.Meta.createMany({
      data: seedMeta.map(m => ({ ...m, about: m?.about?.document })),
    });
  }
}

async function seedPosts(context: Context) {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(path.join(process.cwd(), './src/seed/posts.json'), 'utf-8');
  const seedPosts: any[] = JSON.parse(rawJSONData);
  const postsAlreadyInDatabase = await db.Post.findMany({
    where: {
      slug: { in: seedPosts.map(post => post.slug) },
    },
  });
  const postsToCreate = seedPosts.filter(
    seedPost => !postsAlreadyInDatabase.some(p => p.slug === seedPost.slug)
  );
  await db.Post.createMany({
    data: postsToCreate.map(p => ({
      ...p,
      content: p?.content?.document,
      category: p?.category ? { connect: p?.category } : undefined,
    })),
  });
}

async function seedLinks(context: Context) {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(path.join(process.cwd(), './src/seed/links.json'), 'utf-8');
  const seedLinks: any[] = JSON.parse(rawJSONData);
  const linksAlreadyInDatabase = await db.Link.findMany({
    where: {
      url: { in: seedLinks.map(link => link.url) },
    },
  });
  const linksToCreate = seedLinks.filter(
    seedLink => !linksAlreadyInDatabase.some(l => l.url === seedLink.url)
  );
  await db.Link.createMany({
    data: linksToCreate.map(l => ({
      ...l,
      category: l?.category ? { connect: l?.category } : undefined,
    })),
  });
}

export async function seedDatabase(context: Context) {
  console.log(`🌱 Seeding database...`);
  await seedConfig(context);
  await seedMeta(context);
  await seedCategories(context);
  await seedPosts(context);
  await seedLinks(context);
  console.log(`🌱 Seeding database completed.`);
}
