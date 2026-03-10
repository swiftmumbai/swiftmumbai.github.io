/**
 * Fetches recent tweets from the Twitter/X API v2 and writes
 * public/twitter/tweets.json for the site to consume at runtime.
 *
 * Required env: TWITTER_BEARER_TOKEN
 *
 * Usage:  node scripts/fetch-twitter.mjs
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TOKEN = process.env.TWITTER_BEARER_TOKEN;
const USERNAME = "swift_mumbai";
const OUTPUT_DIR = join(process.cwd(), "public", "twitter");
const TWEETS_JSON = join(OUTPUT_DIR, "tweets.json");
const MAX_TWEETS = 12;

// Pinned tweet IDs — these are excluded from the dynamic feed
// to avoid showing duplicates in the carousel.
// Update these to match the IDs in src/components/Twitter.tsx
const PINNED_IDS = new Set([
  // Add your pinned tweet IDs here, e.g.:
  // "1234567890123456789",
]);

async function main() {
  if (!TOKEN) {
    console.error("Error: TWITTER_BEARER_TOKEN env variable is not set.");
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // ── Step 1: Resolve username → user ID ──────────────────────────────
  const userRes = await fetch(
    `https://api.twitter.com/2/users/by/username/${USERNAME}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  );

  if (!userRes.ok) {
    const body = await userRes.text();
    console.error(`Twitter user lookup failed (${userRes.status}): ${body}`);
    process.exit(1);
  }

  const { data: userData } = await userRes.json();
  const userId = userData.id;
  console.log(`Resolved @${USERNAME} → user ID ${userId}`);

  // ── Step 2: Fetch recent tweets ─────────────────────────────────────
  const tweetsUrl = new URL(`https://api.twitter.com/2/users/${userId}/tweets`);
  tweetsUrl.searchParams.set("max_results", "20");
  tweetsUrl.searchParams.set("exclude", "retweets,replies");
  tweetsUrl.searchParams.set("tweet.fields", "created_at,public_metrics,text");

  const tweetsRes = await fetch(tweetsUrl, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

  if (!tweetsRes.ok) {
    const body = await tweetsRes.text();
    console.error(`Twitter tweets fetch failed (${tweetsRes.status}): ${body}`);
    process.exit(1);
  }

  const { data: tweetsData } = await tweetsRes.json();

  if (!tweetsData?.length) {
    console.log("No tweets returned from API.");
    writeFileSync(
      TWEETS_JSON,
      JSON.stringify({ lastUpdated: new Date().toISOString(), tweets: [] }, null, 2)
    );
    return;
  }

  // Filter out pinned tweets and take the latest N
  const dynamicTweets = tweetsData
    .filter((t) => !PINNED_IDS.has(t.id))
    .slice(0, MAX_TWEETS)
    .map((t) => ({
      id: t.id,
      text: t.text,
      createdAt: t.created_at,
      metrics: t.public_metrics,
    }));

  // ── Step 3: Write manifest ──────────────────────────────────────────
  const output = {
    lastUpdated: new Date().toISOString(),
    tweets: dynamicTweets,
  };

  writeFileSync(TWEETS_JSON, JSON.stringify(output, null, 2));
  console.log(`\nDone — ${dynamicTweets.length} tweets written to tweets.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
