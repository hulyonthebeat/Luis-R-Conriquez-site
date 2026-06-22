import { Router, type IRouter } from "express";
import { db, newsletterSignupsTable } from "@workspace/db";
import { CreateNewsletterSignupBody, type NewsletterSignup } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/newsletter", async (req, res): Promise<void> => {
  const parsed = CreateNewsletterSignupBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid newsletter signup");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  if (parsed.data.consent !== true) {
    res.status(400).json({ error: "Consent is required" });
    return;
  }

  const name = parsed.data.name.trim();
  const email = parsed.data.email.trim().toLowerCase();
  const phone = parsed.data.phone?.trim() || null;
  const country = parsed.data.country?.trim() || null;

  if (!name || !email) {
    res.status(400).json({ error: "Name and email are required" });
    return;
  }

  const [row] = await db
    .insert(newsletterSignupsTable)
    .values({ name, email, phone, country, consent: parsed.data.consent })
    .returning();

  const response: NewsletterSignup = {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    country: row.country,
    consent: row.consent,
  };
  res.status(201).json(response);
});

export default router;
