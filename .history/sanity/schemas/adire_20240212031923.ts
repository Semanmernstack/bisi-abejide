export default {
    name: 'adire',
    type: 'document',
    title: 'Adire',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Adire'
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
        title: 'Category',
        type: 'reference',
        to: [{type: 'category'},]
      }
     
    ],
  }