import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return rss({
    title: 'Mohit Kumar — Blog',
    description: 'Notes on healthcare AI and local-first tools.',
    site: context.site ?? 'https://greyentity101.github.io/portfolio-astro',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: `${base}writing/${post.slug}/`,
    })),
  });
}
