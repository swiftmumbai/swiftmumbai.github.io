import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";

describe("index.html metadata", () => {
  it("defines the core SEO and social preview tags", () => {
    const indexHtmlPath = path.resolve(process.cwd(), "index.html");
    const indexHtml = readFileSync(indexHtmlPath, "utf8");
    const title = indexHtml.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
    const description = indexHtml.match(/<meta\s+name="description"\s+content="([^"]+)"/)?.[1];
    const ogDescription = indexHtml.match(/<meta\s+property="og:description"\s+content="([^"]+)"/)?.[1];

    expect(title, "expected index.html to include a title tag").toBe(
      "Swift Mumbai | India's Premier Apple Platform Developer Community",
    );
    expect(description).toBe(
      "A community for developers, designers, indies, and students since 2017.",
    );
    expect(ogDescription).toBe(description);
    expect(indexHtml).toContain('name="theme-color" content="#f46e2f"');
    expect(indexHtml).toContain('rel="canonical" href="https://swiftmumbai.github.io/"');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('property="og:description"');
    expect(indexHtml).toContain('property="og:url" content="https://swiftmumbai.github.io/"');
    expect(indexHtml).toContain('property="og:image" content="https://swiftmumbai.github.io/og-image.png"');
    expect(indexHtml).toContain('property="og:image:width" content="1200"');
    expect(indexHtml).toContain('property="og:image:height" content="630"');
    expect(indexHtml).toContain('name="twitter:card" content="summary_large_image"');
    expect(indexHtml).toContain('name="twitter:title"');
    expect(indexHtml).toContain('name="twitter:description"');
    expect(indexHtml).toContain('name="twitter:image" content="https://swiftmumbai.github.io/og-image.png"');
  });
});
