import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle/generated',
  dialect: 'turso',
  dbCredentials: {
    url: Deno.env.get('TURSO_URL')!,
    authToken: Deno.env.get('TURSO_AUTH_TOKEN')!,
  },
  verbose: true,
  strict: true,
});
