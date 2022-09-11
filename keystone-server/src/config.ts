import type { KeystoneConfig } from '@keystone-6/core/types';
import { lists } from './schema';
import { seedDatabase } from './seed';
import { backupToJSON } from './seed/backup';
import { Context, TypeInfo } from '.keystone/types';

const db: KeystoneConfig<TypeInfo>['db'] = {
  provider: 'sqlite',
  url: 'file:./database.db',
  useMigrations: true,
  async onConnect(context: Context) {
    if (process.argv.includes('--seed-database')) {
      await seedDatabase(context);
    }

    if (process.argv.includes('--backup-to-json')) {
      await backupToJSON(context);
    }
  },
};

const graphql: KeystoneConfig<TypeInfo>['graphql'] = {
  apolloConfig: {
    introspection: true,
  },
};

export { db, lists, graphql };
