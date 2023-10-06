export default {
    name: 'objetivos',
    type: 'document',
    title: 'Objetivos',
    fields: [
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
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