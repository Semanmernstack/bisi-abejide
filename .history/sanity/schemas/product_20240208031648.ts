import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Product',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug Product',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Items Price',
    }),
    defineField({
      name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{type: 'image'}],
      
      
    }),
    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    
  ],

  
})
