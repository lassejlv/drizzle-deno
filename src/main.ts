import 'jsr:@std/dotenv/load';
import { db } from './drizzle/index.ts';
import { users } from './drizzle/schema.ts';

const resp = await db.select().from(users).limit(1);
console.log(resp);
