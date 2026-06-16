export const featuredArticleSchema = {
  name: 'featuredArticle',
  title: 'Featured Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'One sentence shown on the homepage card',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Full Article Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'order',
      title: 'Display Order (1, 2, 3)',
      type: 'number',
    },
  ],
}
