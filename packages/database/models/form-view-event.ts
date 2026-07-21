import {
    pgTable,
    uuid,
    timestamp,
} from "drizzle-orm/pg-core";

import { formsTable } from "./form";

export const formViewEventsTable = pgTable("form_view_events", {
    id: uuid("id").primaryKey().defaultRandom(),

    formId: uuid("form_id")
        .references(() => formsTable.id, {
            onDelete: "cascade",
        })
        .notNull(),

    createdAt: timestamp("created_at").defaultNow(),
});