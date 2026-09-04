import { defineCollection, z } from 'astro:content';

export const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'completed', 'archived']).default('active'),
    tags: z.array(z.string()).default([]),
    date: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

export const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('Engineering'),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

export const talks = defineCollection({
  schema: z.object({
    title: z.string(),
    venue: z.string().default('Conference'),
    date: z.string(),
    description: z.string().optional(),
    slides: z.string().url().optional(),
    video: z.string().url().optional(),
  }),
});