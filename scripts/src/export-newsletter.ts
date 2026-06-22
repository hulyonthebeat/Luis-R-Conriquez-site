import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { db, newsletterSignupsTable } from "@workspace/db";

const workspaceRoot = process.cwd().endsWith(path.join("scripts"))
  ? path.resolve(process.cwd(), "..")
  : process.cwd();

function csvCell(value: unknown): string {
  let s = value == null ? "" : String(value);
  // Neutralize spreadsheet formula injection: prefix cells that begin with a
  // formula-trigger character so Excel/Sheets treat them as text, not formulas.
  if (/^[=+\-@\t\r]/.test(s)) {
    s = `'${s}`;
  }
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

async function main(): Promise<void> {
  const rows = await db
    .select()
    .from(newsletterSignupsTable)
    .orderBy(newsletterSignupsTable.createdAt);

  const headers = [
    "id",
    "name",
    "email",
    "phone",
    "country",
    "consent",
    "created_at",
  ];

  const lines = [headers.join(",")];
  for (const r of rows) {
    lines.push(
      [
        r.id,
        r.name,
        r.email,
        r.phone ?? "",
        r.country ?? "",
        r.consent,
        r.createdAt instanceof Date ? r.createdAt.toISOString() : r.createdAt,
      ]
        .map(csvCell)
        .join(","),
    );
  }

  const outDir = path.resolve(workspaceRoot, "deliverables");
  mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, "newsletter-signups.csv");
  writeFileSync(out, lines.join("\n") + "\n", "utf8");
  console.log(`Exported ${rows.length} newsletter signup(s) to ${out}`);
  process.exit(0);
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
