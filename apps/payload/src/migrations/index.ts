import * as migration_20260831_175913 from './20260831_175913';

export const migrations = [
  {
    up: migration_20260831_175913.up,
    down: migration_20260831_175913.down,
    name: '20260831_175913'
  },
];
