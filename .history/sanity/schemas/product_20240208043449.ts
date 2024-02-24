
export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'desc',
      type: 'text',
      title: 'Products Description'

    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug Product',
      options: {
          source: 'name',
      },

    },
    {
      name: 'price',
      type: 'number',
      title: 'Items Price',
    },
    {
      name: 'category',
      title: 'List of Category',
      type: 'reference',
      to: [{type: 'category'},]
    }
   
  ],
}
