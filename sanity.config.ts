import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'harmony-engineering',
  title: 'Harmony Engineering — Command Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Command Center')
          .items([
            S.listItem()
              .title('SOPs (Articles)')
              .child(S.documentTypeList('sop').title('Standard Operating Procedures')),
            S.divider(),
            S.listItem()
              .title('Products (Amazon Boutique)')
              .child(S.documentTypeList('product').title('Products')),
            S.divider(),
            S.listItem()
              .title('Ops Center Questions')
              .child(S.documentTypeList('question').title('Community Questions')),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
