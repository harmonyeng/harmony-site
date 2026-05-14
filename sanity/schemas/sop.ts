import { defineField, defineType } from 'sanity'

export const sopSchema = defineType({
  name: 'sop',
  title: 'SOP (Article)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sopNumber',
      title: 'SOP Number (e.g. SOP-007)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Operations', value: 'Operations' },
          { title: 'Scheduling', value: 'Scheduling' },
          { title: 'Logistics', value: 'Logistics' },
          { title: 'Systems', value: 'Systems' },
          { title: 'Mindset', value: 'Mindset' },
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (5–6 lines, shown on homepage)',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: 'body',
      title: 'Full Article Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Published (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'sopNumber', date: 'publishedAt' },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle ?? ''} · ${date ? new Date(date).toLocaleDateString('en-US') : 'Unpublished'}`,
      }
    },
  },
})
