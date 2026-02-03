import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";


const projects = defineCollection({
    loader: file('src/content/projects.yaml'),
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image().optional(),
        description: z.string(),
        href: z.string(),
    }),
})

const experience = defineCollection({
    loader: glob({ pattern: 'src/content/experience/*.md' }),
    schema: z.discriminatedUnion('type', [
        z.object({
            id: z.number(),
            type: z.literal('work'),
            company: z.string(),
            role: z.string().optional(),
            start: z.date().optional(),
            end: z.date().optional().nullable(),
            location: z.string(),
            summary: z.string().optional(),
            tech: z.array(z.string()).optional(),
            skills: z.array(z.string()).optional(),
            periods: z.array(z.object({
                start: z.date().optional(),
                end: z.date().optional(),
            })).optional(),
        }),
        z.object({
            id: z.number(),
            type: z.literal('education'),
            institution: z.string(),
            program: z.string(),
            level: z.string(),
            start: z.date(),
            end: z.date(),
            focus: z.array(z.string()).optional(),
        }),
    ]),
})


export const collections = {
    projects,
    experience,
}