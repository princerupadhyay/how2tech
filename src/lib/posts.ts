import { getCollection, type CollectionEntry } from 'astro:content';
import { categories } from '../data/categories';
export type Post = CollectionEntry<'blog'>;

export async function allPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
export const url = (p: Post) => `/${p.slug}/`;
export const catOf = (name: string) => categories.find((c) => c.name === name) ?? categories[0];
export const fmt = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
export const iso = (d: Date) => d.toISOString().slice(0, 10);
export const thumb = (p: Post) => p.data.featuredImage.replace(/\.webp$/, '-sm.webp');
export function byCategory(posts: Post[], name: string) { return posts.filter((p) => p.data.category === name); }
export function related(posts: Post[], post: Post, n = 3) {
  return posts.filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, s: (p.data.category === post.data.category ? 2 : 0) + p.data.tags.filter((t) => post.data.tags.includes(t)).length }))
    .sort((a, b) => b.s - a.s || b.p.data.publishedAt.valueOf() - a.p.data.publishedAt.valueOf())
    .slice(0, n).map((x) => x.p);
}
