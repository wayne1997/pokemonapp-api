export const PokemonsData: IPokemon[] =
    [
        {
            id:'013f316e-3d14-4c71-8929-0dad75cc480e' ,
            name: 'rapidash',
            description: 'Muy competitivo, este Pokémon perseguirá a todo lo que se mueva rápido, esperando ganarle.',
            size: 1.7,
            weigth: 95.0,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643346/rapidash_front_default_g2ji1x.png'
        },
        {
            id: '16765a1e-580a-49d9-a08b-dc070a252ddc',
            name: 'ponyta',
            description: 'Sus cascos son 10 veces más duros que el diamante. Puede pisotear cualquier cosa en poco tiempo',
            size: 1.0,
            weigth: 30.0,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643345/ponyta_front_default_wckzym.png',
            evolutionId: '013f316e-3d14-4c71-8929-0dad75cc480e'
        },
        {
            id:'07370c4f-eb5e-4838-b615-928b9d210667',
            name: 'ivysaur',
            description: 'Cuando el bulbo de su espalda crece, parece no poder ponerse de pie sobre sus patas traseras.',
            size: 1.0,
            weigth: 13.0,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643346/ivysaur_front_default_vtehyz.png',
            evolutionId: '23dd3c7c-c72f-43fe-8c88-abbb6db450d6'
        },
        {
            id: '0753272a-b38f-49f4-8104-54e752f6be8d',
            name: 'bulbasaur',
            description: 'Una rara semilla fue plantada en su espalda al nacer. La planta brota y crece con este Pokémon.',
            size: 0.7,
            weigth: 6.9,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643346/bulbasaur_front_default_dmfrn1.png',
            evolutionId: '07370c4f-eb5e-4838-b615-928b9d210667'
        },
        {
            id:'23dd3c7c-c72f-43fe-8c88-abbb6db450d6',
            name: 'venusaur',
            description: 'La planta florece cuando absorbe energía solar. Ésta le obliga a ponerse en busca de la luz solar.',
            size: 2.0,
            weigth: 100.0,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643346/venusaur_front_default_yy5ie9.png'
        },
        {
            id:'4b5aa8f5-07c5-4c3f-b1ee-b07916031196',
            name: 'charmander',
            description: 'Prefiere los sitios calientes. Dicen que cuando llueve sale vapor de la punta de su cola.',
            size: 0.6,
            weigth: 8.5,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643346/charmander_front_default_nrvibe.png',
            evolutionId: '6f229a18-0ecf-4d86-a4ef-5df293f5dde5',
          
        },
        {
            id: '6f229a18-0ecf-4d86-a4ef-5df293f5dde5',
            name: 'charmeleon',
            description: 'Por Naturaleza, se acalora con facilidad: siempre está buscando enemigos. Sólo se calma cuando gana.',
            size: 1.1,
            weigth: 19.0,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643346/charmeleon_front_default_tg6x3m.png',
            evolutionId: '7d491eb4-9c50-40de-a880-784e7046ae67'
        },
        {
            id: '7d491eb4-9c50-40de-a880-784e7046ae67',
            name: 'charizar',
            description: 'Cuando lanza una descarga de fuego súper caliente, la roja llama de su cola brilla más intensamente.',
            size: 1.7,
            weigth: 90.5,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643346/charizar_front_default_opfyeo.png'
        },
        {
            id: '81b5bb5b-0f84-4bef-b822-4fbfe487f8e5',
            name: 'pichu',
            description: 'Todavía no domina el almacenamiento de electricidad, y descargará un rayo si se divierte o asusta.',
            size: 2.0,
            weigth: 0.3,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643345/pichu_front_default_qmeebb.png',
            evolutionId:'8f474a3f-a35d-4d12-9caf-55741ac0f198',
        },
        {
            id: '8f474a3f-a35d-4d12-9caf-55741ac0f198',
            name: 'pikachu',
            description: 'Este inteligente Pokémon tuesta las duras BAYAS con electricidad para hacerlas más comestibles.',
            size: 0.4,
            weigth: 6.0,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643345/pikachu_front_default_a6839u.png',
            evolutionId: 'cfc0054e-c33a-4917-a5f5-b5c230c11d51',
        },
        {
            id: 'cfc0054e-c33a-4917-a5f5-b5c230c11d51',
            name: 'raichu',
            description: 'Si las bolsas de los mofletes se le cargan demasiado, Raichu planta la cola en el suelo para liberar electricidad. Es común encontrar zonas chamuscadas cerca de la madriguera de este Pokémon.',
            size: 30.0,
            weigth: 0.8,
            image: 'https://res.cloudinary.com/dj6yveo5u/image/upload/v1666643345/raichu_front_default_qtognr.png',
        },
    ];


export const pokemonTypes: IPokemonTypes[] = [
    {
        name: 'raichu',
        types: ['Eléctrico']
    },
    {
        name: 'pikachu',
        types: ['Eléctrico']
    },
    {
        name: 'pichu',
        types: ['Eléctrico']
    },
    {
        name: 'charizar',
        types: ['Fuego', 'Volador']
    },
    {
        name: 'charmelon',
        types: ['Fuego']
    },
    {
        name: 'charmander',
        types: ['Fuego']
    },
    {
        name: 'venusaur',
        types: ['Planta', 'Veneno']
    },
    {
        name: 'bulbasaur',
        types: ['Planta', 'Veneno']
    },
    {
        name: 'ivysaur',
        types: ['Planta', 'Veneno']
    },
    {
        name: 'ponyta',
        types: ['Fuego']
    },
    {
        name: 'rapidash',
        types: ['Fuego']
    },
];


export interface IPokemonTypes{
    name: string,
    types: string[]
}


export interface IPokemon {
    id?: string,
    name: string,
    description: string,
    size: number,
    weigth: number,
    image: string,
    evolutionId?: string
}