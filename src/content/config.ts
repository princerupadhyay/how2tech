import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Technology', 'Gaming', 'How-To', 'AI & Tools', 'Internet & Security', 'Explained']),
    tags: z.array(z.string()).default([]),
    author: z.string().default('How2Tech Editorial Team'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featuredImage: z.string(),
    featuredImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    popular: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});
export const collections = { blog };
