export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price (₦)',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Clothes',     value: 'clothes' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Bags',        value: 'bags' },
          { title: 'Shoes',       value: 'shoes' },
          { title: 'Other',       value: 'other' },
        ]
      }
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    },
    {
      name: 'isAvailable',
      title: 'Available for purchase?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'isFeatured',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false
    },
  ]
}
