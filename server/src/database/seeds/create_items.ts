import knex from 'knex';
export async function seed(knex: knex) {
    await knex('items').insert([
        { title: 'Lãmpadas', image: 'lampadas.svg'},
        { title: 'Pilhas e Baterias', image: 'baterias.svg'},
        { title: 'Papéis e papelão', image: 'papeis-papelao.svg'},
        { title: 'Residuos Eletrõnicos', image: 'eletronicos.svg'},
        { title: 'Residuos Orgânicos', image: 'organicos.svg'},
        { title: 'Òleo de cozinha', image: 'oleo.svg'},
    ]
    )
}