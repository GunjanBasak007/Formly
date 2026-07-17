import {
    pgTable,
    uuid,
    varchar,
    timestamp,
    boolean,
    text,
    integer
} from "drizzle-orm/pg-core";
import { usersTable } from "./user";



export const formsTable = pgTable("forms", {
    id: uuid("id").primaryKey().defaultRandom(),

    title: varchar('title', { length: 55 }).notNull(),
    description: varchar('description', { length: 300 }),

    createdBy: uuid('created_by').references(() => usersTable.id),

    views: integer("views").default(0).notNull(),
    

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
})
