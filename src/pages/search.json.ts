import { allPosts, url, thumb } from '../lib/posts';
export const prerender = true;

export async function GET() {
  const posts = await allPosts();
  const data = posts.map((p) => ({ t: p.data.title, u: url(p), c: p.data.category, d: p.data.description, i: thumb(p), g: p.data.tags }));
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}
