import type { KeystoneConfig } from '@keystone-6/core/types';
import { lists } from './schema';
import { seedDatabase } from './seed';
import { Context, TypeInfo } from '.keystone/types';

const db: KeystoneConfig<TypeInfo>['db'] = {
  provider: 'sqlite',
  url: 'file:./database.db',
  useMigrations: false,
  async onConnect(context: Context) {
    if (process.argv.includes('--seed-database')) {
      await seedDatabase(context);
    }
  },
};

export { db, lists };
