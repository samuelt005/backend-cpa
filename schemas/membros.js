export default {
    name: 'membros',
    type: 'document',
    title: 'Membros - Comissão',
    fields: [
        {
            name: 'destaque',
            type: 'boolean',
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
            name: 'subtitulo',
            type: 'string',
            title: 'Sub-Título'
        },
        {
            name: 'titulo',
            type: 'string',
            title: 'Título'
        },
        {
            name: 'bio',
            type: 'string',
            title: 'Bio'
        }
    ]
}