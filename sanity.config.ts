import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'harmony-engineering',
  title: 'Harmony Engineering — Command Studio',
  projectId: '0vtg63p7',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: [],
  },
})
