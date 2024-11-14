import { sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', (t) => ({
  id: t.integer().primaryKey(),
  email: t.text().notNull().unique(),
  password: t.text().notNull(),
}));

export type SelectUSer = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
