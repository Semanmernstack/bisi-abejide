import { type SchemaTypeDefinition } from 'sanity'


import category from './schemas/category'

import product from './schemas/product'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, category]
}
