import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const releases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/releases' }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    youtubeUrl: z.string().url().optional(),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    description: z.string().optional(),
    order: z.number().default(0),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/links' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    order: z.number().default(0),
    note: z.string().optional(),
  }),
});

export const collections = { releases, links };
