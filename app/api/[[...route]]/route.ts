import { Hono } from "hono";
import { handle } from "hono/vercel";
import fs from "fs";
import path from "path";

const app = new Hono();

const DATA_DIR = path.join(process.cwd(), "data");

// Get all surahs
app.get("/surahs", (c) => {
  try {
    const filePath = path.join(DATA_DIR, "surahs.json");
    if (!fs.existsSync(filePath)) {
      return c.json({ error: "Data not found" }, 404);
    }
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return c.json(data);
  } catch (error) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

// Get specific surah
app.get("/surah/:id", (c) => {
  try {
    const id = c.req.param("id");
    const filePath = path.join(DATA_DIR, "chapters", `${id}.json`);
    if (!fs.existsSync(filePath)) {
      return c.json({ error: "Surah not found" }, 404);
    }
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return c.json(data);
  } catch (error) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

// Search ayahs by text in translation
app.get("/search", (c) => {
  try {
    const query = c.req.query("q")?.toLowerCase();
    if (!query) return c.json([]);

    const chaptersDir = path.join(DATA_DIR, "chapters");
    const results: any[] = [];

    // Simple search across all files (could be slow, but works for start)
    const files = fs.readdirSync(chaptersDir);
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      const content = JSON.parse(
        fs.readFileSync(path.join(chaptersDir, file), "utf-8"),
      );
      const matches = content.ayats.filter(
        (a: any) =>
          a.en.toLowerCase().includes(query) ||
          a.bn.toLowerCase().includes(query),
      );

      if (matches.length > 0) {
        results.push({
          surah: {
            number: content.number,
            name: content.name,
            englishName: content.englishName,
          },
          matches: matches.slice(0, 5), // Limit matches per surah
        });
      }
    }

    return c.json(results.slice(0, 20)); // Limit total surahs with matches
  } catch (error) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
