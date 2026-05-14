import { defineField, defineType } from 'sanity'

export const authorSchema = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'role', title: 'Role (e.g. Chief Engineer)', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'isAdmin',
      title: 'Chief Engineer (Admin)',
      type: 'boolean',
      initialValue: false,
      description: 'Admin replies appear with a ★ star in the Ops Center.',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
})
