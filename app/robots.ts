import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required for `output: "export"` — otherwise Next treats a route that
// reads a runtime value (site.url) as potentially dynamic and refuses to
// prerender it to a static file.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
