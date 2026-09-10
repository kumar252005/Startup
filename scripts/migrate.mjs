import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is required to run migrations.");
  process.exit(1);
}

const migration = await readFile(new URL("../db/migrations/001_initial.sql", import.meta.url), "utf8");
const sql = neon(process.env.DATABASE_URL);
const statements = migration.split(/;\s*(?:\r?\n|$)/).map((statement) => statement.trim()).filter(Boolean);
for (const statement of statements) await sql.query(statement);
console.log(`Applied ${statements.length} database statements.`);
