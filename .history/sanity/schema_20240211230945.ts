import { type SchemaTypeDefinition } from 'sanity'


import category from './schemas/category'

import product from './schemas/product'
import tst from './schemas/tst'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, category, tst]
}
