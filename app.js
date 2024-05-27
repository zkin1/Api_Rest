const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use('/img', express.static(path.resolve(__dirname, 'img')));

let data = [
  {
    nombre: 'Batman Núm. 11',
    descripcion: '¡El Amanecer de DC sigue aquí! ¡La batalla final! ¡El enfrentamiento definitivo entre Máscara Roja y Batman culmina con un número muy especial y lleno de sorpresas! El equipo de lujo formado por Chip Zdarsky y Jorge Jiménez (¡junto a un montón de estrellas invitadas!) homenajean al Caballero Oscuro ¡No te lo puedes perder!',
    precio: 20000,
    stock: 25,
    foto: '/img/Pbatman.png'
  },
  {
    nombre: 'Batman: La Broma Asesina (Grandes Novelas Gráficas De Batman)',
    descripcion: 'Hay pocos enemigos tan acérrimos como Batman y el Joker. Ahora, el villano ha urdido un nuevo plan que pasa por secuestrar al comisario Gordon para humillarlo y destruirlo después de perjudicar a uno de sus seres más queridos. ¿Servirá como excusa para que el Caballero Oscuro y el Príncipe Payaso del Crimen libren la batalla final?',
    precio: 35000,
    stock: 15,
    foto: '/img/PbromaAsesina.png'
  },
  {
    nombre: 'Terror Insólito Vol. 3 De 3',
    descripcion: 'En este volumen Junji Ito despliega su maestría en la creación de ambientes, como vemos en El disco de segunda mano, uno de los favoritos del autor, donde la música se convierte en un elemento espeluznante. Otros ejemplos son La cañería gimiente, un relato que gira en torno al ruido inquietante de un desagüe, El club de los fumadores, donde el humo es algo fascinante que poco a poco se va adueñando de toda la historia, o Un laberinto insoportable, en el que la espiritualidad y la claustrofobia se unen para crear una auténtica pesadilla.',
    precio: 29990,
    stock: 10,
    foto: '/img/Pterrorinsolito.png'
  },
  {
    nombre: 'Pumpkin night Vol. 6',
    descripcion: 'Su amigo, un chico llamado Kazuya Makino, es el próximo objetivo de este misterioso asesino. Resulta que la verdadera identidad de Pumpkin Night es Naoko Kirino, una niña intimidada desde la infancia y que ha escapado de una institución mental para vengarse de sus matones.',
    precio: "10.990",
    stock: 6,
    foto: '/img/pumpkin.jpg'
  },
  {
    nombre: 'Maximum Berserk 7',
    descripcion: '¡Se ha manifestado una dimensión alternativa! Un espacio que da sentido a todo lo sucedido hasta ahora, pero donde al mismo tiempo ese pasado carece de importancia. El Beherit, de nuevo en las manos de Griffith, responde a la llamada de su corazón, derrama lágrimas de sangre y arrastra a la Banda del Halcón en pleno a esa otra dimensión. Se produce entonces el advenimoiento de cuatro seres grotescos, los Mano de dios, que anuncian que Griffith se incorpora a sus filas tras una ofrenda: la vida de sus compañeros de armas. ¡Empieza el desenfrenado banquete de los demonios!',
    precio: "10.990",
    stock: 7,
    foto: '/img/Pberserk.png'
  },
  {
    nombre: 'ONE PIECE EDICION 3 EN 1: PACK 1 A 5',
    descripcion: 'PACK DE LOS PRIMEROS 5 TOMOS DE ONE PIECE EDITADO POR PLANETA',
    precio: "39.990",
    stock: 2,
    foto: '/img/Ponepice.png'
  }
];

app.use(express.json());

app.get('/api/comics', (req, res) => {
  res.json(data);
});

app.post('/api/comics', (req, res) => {
  console.log('peticion POST con body', req.body);
  data.push(req.body);
  res.send('Datos Guardados');
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
