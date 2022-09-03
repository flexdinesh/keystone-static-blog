/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { Context } from '.keystone/types';

async function backupUsers(context: Context) {
  const { query } = context.sudo();
  const usersInDatabase = await query.User.findMany({ query: 'email name github twitter' });
  const json = JSON.stringify(usersInDatabase, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/users.json'), json, 'utf8');
}

async function backupPosts(context: Context) {
  const { query } = context.sudo();
  const postsInDatabase = await query.Post.findMany({
    query: 'title slug status publishDate author { email } content { document }',
  });
  const postsWithAuthorConnect = postsInDatabase.map(post => ({
    ...post,
    author: post?.author?.email && { connect: { email: post.author.email } },
  }));
  const json = JSON.stringify(postsWithAuthorConnect, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/posts.json'), json, 'utf8');
}

async function backupExternalLinks(context: Context) {
  const { query } = context.sudo();
  const linksInDatabase = await query.ExternalLink.findMany({
    query: 'title url status publishDate type author { email }',
  });
  const linksWithAuthorConnect = linksInDatabase.map(link => ({
    ...link,
    author: link?.author?.email && { connect: { email: link.author.email } },
  }));
  const json = JSON.stringify(linksWithAuthorConnect, null, 2);
  fs.writeFileSync(path.join(process.cwd(), './src/seed/external-links.json'), json, 'utf8');
}

export async function backupToJSON(context: Context) {
  console.log(`💼 Backing up data to JSON...`);
  await backupUsers(context);
  await backupPosts(context);
  await backupExternalLinks(context);
  console.log(`💼 Backing up data to JSON completed.`);
}
