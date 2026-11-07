import type { MetadataRoute } from "next";
import { blogPosts, siteUrl } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/main`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];
  const articles: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date + "T09:00:00+03:30"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...corePages, ...articles];
}
