import rss from '@astrojs/rss';
import { allPosts, url } from '../lib/posts';
import { site } from '../data/site';
export async function GET(context: any) {
  const posts = await allPosts();
  return rss({ title: `${site.name} – ${site.tagline}`, description: site.description, site: context.site, items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.publishedAt, link: url(p), categories: [p.data.category, ...p.data.tags] })) });
}
