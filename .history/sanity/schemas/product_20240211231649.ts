export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product'
      },
      {
        name: 'images',
        type: 'array',
        title: ' Images',
        of: [{type: 'image'}],
      },
      {
        name: 'desc',
        type: 'text',
        title: 'Description'
  
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
        title: 'Price',
      },
      {
        name: 'category',
        title: 'List of Category',
        type: 'reference',
        to: [{type: 'category'},]
      }
     
    ],
  }