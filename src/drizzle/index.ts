import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema.ts';

export const db = drizzle({
  connection: {
    url: Deno.env.get('TURSO_URL')!,
    authToken: Deno.env.get('TURSO_AUTH_TOKEN')!,
  },
  schema,
  logger: Deno.env.get('DEBUG') === 'true',
});
