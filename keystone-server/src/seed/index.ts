/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { Context } from '.keystone/types';

async function seedUsers(context: Context) {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(path.join(process.cwd(), './src/seed/users.json'), 'utf-8');
  const seedUsers: any[] = JSON.parse(rawJSONData);
  const usersAlreadyInDatabase = await db.User.findMany({
    where: {
      email: { in: seedUsers.map(user => user.email) },
    },
  });
  const usersToCreate = seedUsers.filter(
    seedUser => !usersAlreadyInDatabase.some(u => u.email === seedUser.email)
  );
  await db.User.createMany({
    data: usersToCreate,
  });
}

// seed posts and connect with user
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
    data: postsToCreate.map(p => ({ ...p, content: p?.content?.document })),
  });
}

// seed externalLinks and connect with user
async function seedExternalLinks(context: Context) {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(
    path.join(process.cwd(), './src/seed/external-links.json'),
    'utf-8'
  );
  const seedLinks: any[] = JSON.parse(rawJSONData);
  const linksAlreadyInDatabase = await db.ExternalLink.findMany({
    where: {
      url: { in: seedLinks.map(link => link.url) },
    },
  });
  const linksToCreate = seedLinks.filter(
    seedLink => !linksAlreadyInDatabase.some(l => l.url === seedLink.url)
  );
  await db.ExternalLink.createMany({
    data: linksToCreate,
  });
}

export async function seedDatabase(context: Context) {
  console.log(`🌱 Seeding database...`);
  await seedUsers(context);
  await seedPosts(context);
  await seedExternalLinks(context);
  console.log(`🌱 Seeding database completed.`);
}
