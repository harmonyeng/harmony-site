import { defineField, defineType } from 'sanity'

export const questionSchema = defineType({
  name: 'question',
  title: 'Ops Center Question',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'authorEmail',
      title: 'Author Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'body',
      title: 'Question',
      type: 'text',
      rows: 4,
      readOnly: true,
    }),
    defineField({
      name: 'answer',
      title: 'Chief Engineer Reply ★',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Your reply will be highlighted with a star in the Ops Center.',
    }),
    defineField({
      name: 'answeredAt',
      title: 'Answered At',
      type: 'datetime',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Answered', value: 'answered' },
          { title: 'Archived (Think-Tank)', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'relatedSop',
      title: 'Related SOP (optional)',
      type: 'reference',
      to: [{ type: 'sop' }],
    }),
    defineField({
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'body', subtitle: 'authorName', status: 'status' },
    prepare({ title, subtitle, status }) {
      const icons: Record<string, string> = { pending: '⏳', answered: '★', archived: '📁' }
      return {
        title: title?.slice(0, 60) + (title?.length > 60 ? '…' : ''),
        subtitle: `${icons[status] ?? ''} ${subtitle ?? 'Anonymous'}`,
      }
    },
  },
})
