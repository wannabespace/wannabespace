import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  { changeFrequency: "monthly", priority: 1, url: "https://wannabespace.com" },
];

export default sitemap;
