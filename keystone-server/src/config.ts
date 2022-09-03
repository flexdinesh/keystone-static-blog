import type { KeystoneConfig } from '@keystone-6/core/types';
import { lists } from './schema';
import { seedDatabase } from './seed';
import { backupToJSON } from './backup';
import { Context, TypeInfo } from '.keystone/types';

const db: KeystoneConfig<TypeInfo>['db'] = {
  provider: 'sqlite',
  url: 'file:./database.db',
  useMigrations: false,
  async onConnect(context: Context) {
    if (process.argv.includes('--seed-database')) {
      await seedDatabase(context);
    }

    if (process.argv.includes('--backup-to-json')) {
      await backupToJSON(context);
    }
  },
};

export { db, lists };
