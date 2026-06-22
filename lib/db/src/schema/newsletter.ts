import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const newsletterSignupsTable = pgTable("newsletter_signups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  country: text("country"),
  consent: boolean("consent").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertNewsletterSignupSchema = createInsertSchema(
  newsletterSignupsTable,
).omit({ id: true, createdAt: true });
export type InsertNewsletterSignup = z.infer<typeof insertNewsletterSignupSchema>;
export type NewsletterSignup = typeof newsletterSignupsTable.$inferSelect;
