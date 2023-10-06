export default {
    name: 'pilares',
    type: 'document',
    title: 'Pilares dos IES no SINAES',
    fields: [
        {
            name: 'topico',
            type: 'string',
            title: 'Tópico'
        },
        {
            name: 'texto',
            type: 'string',
            title: 'Texto'
        },
        {
            name: 'itens',
            type: 'array',
            title: 'Itens',
            of: [{type: 'string'}],
            options: {
                layout: 'list'
              }
        }
    ]
}