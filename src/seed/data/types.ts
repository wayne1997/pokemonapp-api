
export const typesData: ITypes[] = [
    {
        name: 'Acero',
        description: 'Los Pokémon de este tipo se ubican principalmente en cuevas y cavernas, aunque hay algunos que se pueden encontrar en fábricas o centrales eléctricas, como Magnemite. Skarmory en la tercera y cuarta generación vive en zonas donde cae ceniza. Shieldon y Bastiodon son los únicos Pokémon acero que provienen de un fósil.'
    },
    {
        name: 'Agua',
        description: 'Los Pokémon de agua resultan poco eficaces y débiles frente a los tipos planta debido a que las plantas absorben el agua con sus raíces. Sin embargo, muchos Pokémon de agua son también de tipo hielo o pueden aprender ataques de hielo, que resultan efectivos contra los de planta, disminuyendo así su desventaja de tipo.',
    },
    {
        name: 'Fuego' ,
        description: 'Los Pokémon de tipo fuego basan sus ataques principalmente en el control de este elemento y la mayoría de estos ataques pueden quemar al Pokémon oponente. ',
    },
    {
        name: 'Eléctrico' ,
        description: 'Los Pokémon de tipo eléctrico almacenan electricidad estática en sus cuerpos y luego la liberan en forma de un ataque como Rayo por diferentes partes: las mejillas, la cola, las orejas o antenas. Pero cuando un Pokémon de tipo eléctrico absorbe demasiada electricidad (ya sea por tormentas eléctricas o por aparatos que funcionen con electricidad), resulta muy peligroso porque entonces tiene demasiada energía contenida en su cuerpo que no puede ser liberada en poco tiempo y se enferman. Cuando eso pasa hay que rápidamente quitarles la electricidad en exceso antes de que en el peor de los casos el Pokémon se sobrecargue y explote. ' ,
    },
    {
        name: 'Veneno' ,
        description: 'Los Pokémon de este tipo pueden expulsar de sus cuerpos distintas sustancias venenosas como gases, ácidos, venenos, esporas y a veces olores malolientes. También los Pokémon del tipo veneno están basados en seres vivientes que son generalmente venenosos como serpientes, arañas, ranas, plantas y hongos, y también en cosas contaminantes como lodo y bolsas de basura.' ,
    },
    {
        name: 'Planta' ,
        description: 'Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate.',
    },
    {
        name: 'Dragón' ,
        description: 'Es un tipo elemental ancestral; muchos de los últimos Pokémon legendarios descubiertos, considerados deidades, son del tipo dragón: Rayquaza (cielo), Giratina (antimateria), Dialga (tiempo), Palkia (espacio), Zekrom y Reshiram (Yin y Yang), Kyurem (el cero absoluto, ausencia de energía) y Zygarde (orden). Otros Pokémon de este tipo se caracterizan por ser difíciles de atrapar y entrenar. Interesante es el hecho de que muchos Pokémon del tipo "dragón" llegan a superar las estadísticas comunes.' ,
    },
    {
        name: 'Volador' ,
        description: 'Los Pokémon de tipo volador son rápidos y con ataques que normalmente son de contacto físico, o en los que utilizan el viento a su favor. En su mayoría los Pokémon del tipo volador poseen alas, aunque hay excepciones, como Rayquaza y Gyarados que siempre flotan sin poseer ni alas ni plumas, o Tornadus, Thundurus y Landorus que montan sobre nubes.' ,
    },
];


export interface ITypes {
    name: string,
    description?: string
}