import { type SchemaTypeDefinition } from 'sanity'


import category from './schemas/category'

import product from './schemas/product'
import tst from './schemas/tst'
import adire from './schemas/adire'
import ankara from './schemas/ankara'
import turban from './schemas/turban'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, category, tst, adire, turban, ankara]
}
