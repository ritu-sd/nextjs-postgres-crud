import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial().primaryKey(),
  task: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});
