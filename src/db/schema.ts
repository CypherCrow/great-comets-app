import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const GreatCometsTable = sqliteTable('great_comets', {
    id: integer('id').primaryKey(),
    designation: text('designation').notNull(),
    name: text('name').notNull(),
    year: integer('year').notNull(),
    remarks: text('remarks')
    //image: blob('image')
});