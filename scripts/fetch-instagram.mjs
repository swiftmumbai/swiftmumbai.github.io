/**
 * Fetches recent posts from the Instagram Graph API, downloads images,
 * and writes public/instagram/posts.json for the site to consume at runtime.
 *
 * Required env: INSTAGRAM_ACCESS_TOKEN (long-lived user token)
 *
 * Usage:  node scripts/fetch-instagram.mjs
 */

import {
  writeFileSync,
  mkdirSync,
  readdirSync,
  unlinkSync,
} from "node:fs";
import { join } from "node:path";

const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const OUTPUT_DIR = join(process.cwd(), "public", "instagram");
const POSTS_JSON = join(OUTPUT_DIR, "posts.json");
const MAX_POSTS = 9;

// Permalink slugs of pinned posts — these are excluded from the dynamic feed
// to avoid showing duplicates in the carousel.
const PINNED_SLUGS = new Set([
  "DUPl2Q8jBfpd-WQFcRoqjztTABf9rQoH7lsW3A0",
  "C50NLLKofzF",
  "DLSPjC6olQ4",
]);

function slugFromPermalink(url) {
  // https://www.instagram.com/p/SLUG/ → SLUG
  return url.split("/p/")[1]?.replace(/\/$/, "") ?? "";
}

async function main() {
  if (!TOKEN) {
    console.error("Error: INSTAGRAM_ACCESS_TOKEN env variable is not set.");
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // ── Fetch media list ────────────────────────────────────────────────
  const apiUrl = new URL("https://graph.instagram.com/me/media");
  apiUrl.searchParams.set(
    "fields",
    "id,media_type,media_url,permalink,thumbnail_url,timestamp"
  );
  apiUrl.searchParams.set("limit", "25");
  apiUrl.searchParams.set("access_token", TOKEN);

  const res = await fetch(apiUrl);
  if (!res.ok) {
    const body = await res.text();
    console.error(`Instagram API ${res.status}: ${body}`);
    process.exit(1);
  }

  const { data } = await res.json();

  // Keep only images / carousel albums and skip pinned posts
  const eligible = data.filter((p) => {
    if (p.media_type !== "IMAGE" && p.media_type !== "CAROUSEL_ALBUM")
      return false;
    return !PINNED_SLUGS.has(slugFromPermalink(p.permalink));
  });

  const batch = eligible.slice(0, MAX_POSTS);

  // ── Download images ─────────────────────────────────────────────────
  const activeFiles = new Set(["posts.json"]);
  const posts = [];

  for (const post of batch) {
    const filename = `${post.id}.jpg`;
    const filepath = join(OUTPUT_DIR, filename);
    activeFiles.add(filename);

    try {
      const imgRes = await fetch(post.media_url);
      if (!imgRes.ok) {
        console.warn(`Skipping ${post.id}: image download returned ${imgRes.status}`);
        continue;
      }
      writeFileSync(filepath, Buffer.from(await imgRes.arrayBuffer()));
      console.log(`Downloaded ${filename}`);
    } catch (err) {
      console.warn(`Skipping ${post.id}: ${err.message}`);
      continue;
    }

    posts.push({
      id: post.id,
      image: `/instagram/${filename}`,
      url: post.permalink,
      timestamp: post.timestamp,
    });
  }

  // ── Clean up stale images ───────────────────────────────────────────
  for (const file of readdirSync(OUTPUT_DIR)) {
    if (!activeFiles.has(file)) {
      unlinkSync(join(OUTPUT_DIR, file));
      console.log(`Removed stale file: ${file}`);
    }
  }

  // ── Write manifest ──────────────────────────────────────────────────
  writeFileSync(
    POSTS_JSON,
    JSON.stringify(
      { lastUpdated: new Date().toISOString(), posts },
      null,
      2
    )
  );

  console.log(`\nDone — ${posts.length} dynamic posts written to posts.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
