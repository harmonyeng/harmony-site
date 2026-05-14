import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Site Title', type: 'string', initialValue: 'Harmony Engineering' }),
    defineField({ name: 'siteTagline', title: 'Splash Headline', type: 'string', initialValue: 'The New Standard for Home Management' }),
    defineField({ name: 'metaDescription', title: 'SEO Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'storyHeadline', title: 'The Story — Headline', type: 'string' }),
    defineField({ name: 'storyBody', title: 'The Story — Body', type: 'text', rows: 6 }),
    defineField({
      name: 'braveManContent',
      title: 'Brave Man Access — Page Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'ogImage', title: 'Open Graph Image (Social sharing)', type: 'image' }),
  ],
  preview: {
    prepare() { return { title: 'Site Settings' } },
  },
})
