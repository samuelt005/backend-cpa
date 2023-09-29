export default {
    name: 'membros',
    type: 'document',
    title: 'Membros - Comissão',
    fields: [
        {
            name: 'destaque',
            type: 'string',
            title: 'Destaque'
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        },
        {
            name: 'nome',
            type: 'string',
            title: 'Nome'
        },
        {
            name: 'cargo',
            type: 'string',
            title: 'Cargo'
        },
        {
            name: 'bio',
            type: 'string',
            title: 'Bio'
        }
    ]
}