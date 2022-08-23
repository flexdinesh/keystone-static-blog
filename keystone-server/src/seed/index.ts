import fs from 'fs';
import path from 'path';
import { Context } from '.keystone/types';

async function seedUsers(context: Context) {
  const { query } = context.sudo();
  const rawJSONData = fs.readFileSync(path.join(process.cwd(), './src/seed/users.json'), 'utf-8');
  const seedUsers = JSON.parse(rawJSONData);

  for await (const user of seedUsers) {
    try {
      const queriedUser = await query.User.findOne({
        where: {
          email: user.email,
        },
      });

      if (!queriedUser) {
        await query.User.createOne({
          data: {
            email: user.email,
            name: user.name,
            github: user.github,
            twitter: user.twitter,
          },
        });
      }
    } catch (e) {
      console.error('Seeding user failed: ', {
        user,
        message: (e as Error).message,
      });
    }
  }
}

// seed posts and connect with user
async function seedPosts(context: Context) {
  const { query } = context.sudo();
  const rawJSONData = fs.readFileSync(path.join(process.cwd(), './src/seed/posts.json'), 'utf-8');
  const seedPosts = JSON.parse(rawJSONData);

  for await (const post of seedPosts) {
    try {
      const queriedPost = await query.Post.findOne({
        where: {
          slug: post.slug,
        },
      });

      if (!queriedPost) {
        await query.Post.createOne({
          data: {
            title: post.title,
            slug: post.slug,
            status: post.status,
            publishDate: post.publishDate,
            content: post.content?.document,
            ...(post.author?.connect?.email && {
              author: {
                connect: {
                  email: post.author.connect.email,
                },
              },
            }),
          },
        });
      }
    } catch (e) {
      console.error('Seeding post failed: ', {
        post,
        message: (e as Error).message,
      });
    }
  }
}

export async function seedDatabase(context: Context) {
  console.log(`🌱 Seeding database...`);
  await seedUsers(context);
  await seedPosts(context);
  console.log(`🌱 Seeding database completed.`);
}
