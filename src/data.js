//  import icons
import {
  FiCreditCard,
  FiTruck,
  FiSend,
  FiInstagram,
  FiYoutube,
  FiFacebook
} from 'react-icons/fi';

// import Toys
import Brienne from './assets/toys/brienne.png';
import Dany from './assets/toys/dany.png';
import Davos from './assets/toys/davos.png';
import Ghost from './assets/toys/ghost.png';
import Jon from './assets/toys/jon.png';
import King from './assets/toys/king.png';
import Tormun from './assets/toys/tormund.png';
import Tyrion from './assets/toys/tyrion.png';

// Import Brands
import Disney from './assets/brands/disney.png';
import Funko from './assets/brands/logo_destacado_funko.png';
import LOL from './assets/brands/logo_destacado_LOL.png';
import Marvel from './assets/brands/marvel.png';

// Import most wanted
import Dino from './assets/more searched/dino.png';
import BackpackDino from './assets/more searched/mochila.png';

// Import most wanted
import Backpack1 from './assets/news/1.png';
import Backpack2 from './assets/news/2.png';

// Import Icons
import Afip from './assets/icons/afip.png';
import Ahora from './assets/icons/ahora_18 1.png';
import Cace from './assets/icons/cace.png';
import Cruce from './assets/icons/cruce-logo.png';
import Off from './assets/icons/off.png';
import Vtex from './assets/icons/vtex.png';

// navigation
export const navigation = [
    {
      id: 1,
      name: 'LOL',
      href: 'home',
    },
    {
      id: 2,
      name: 'CryBabies',
      href: 'about',
    },
    {
      id: 3,
      name: 'Funko',
      href: 'portfolio',
    }
  ];

// benefits
export const benefits = [
    {
      id: 1,
      icon: <FiCreditCard />,
      h2: '12 y 18 Cuotas',
      red: '!Sin interes!'
    },
    {
      id: 2,
      icon: <FiTruck />,
      h2: 'Envio gratis',
      red: 'En todas las compras'
    },
    {
      id: 3,
      icon: <FiSend />,
      h2: 'Te llego 24hs',
      red: 'Con costo adicional'
    },
  ];

// Toys
export const toys = [
  {
    id: 1,
    name: 'Brienne 25',
    image: Brienne,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 211.50,
    season: 1,
    final: 1.269,
    news: 'on',
    offer: 'on'
  },
  {
    id: 2,
    name: 'Daenerys 25',
    image: Dany,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 311.50,
    season: 1,
    final: 1.269,
    day: 'on',
    news: 'on'
  },
  {
    id: 3,
    name: 'Davos 25',
    image: Davos,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 411.50,
    season: 1,
    day: 'off',
    news: 'on'
  },
  {
    id: 4,
    name: 'Ghost 25',
    image: Ghost,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 211.50,
    season: 1,
    day: 'off',
    news: 'on'
  },
  {
    id: 5,
    name: 'King 25',
    image: King,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 212.50,
    season: 1,
    day: 'off',
    news: 'on'
  },
  {
    id: 6,
    name: 'jon 25',
    image: Jon,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 213.50,
    season: 1,
    day: 'off',
    news: 'on'
  },
  {
    id: 7,
    name: 'Tormun 25',
    image: Tormun,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 511.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 8,
    name: 'Tyrion 25',
    image: Tyrion,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 218.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 9,
    name: 'Tormun 25',
    image: Brienne,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 212.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 10,
    name: 'Tyrion 25',
    image: Dany,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 234.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 11,
    name: 'Tormun 25',
    image: Jon,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 312.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 12,
    name: 'Tyrion 25',
    image: King,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 321.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 13,
    name: 'Tormun 25',
    image: Tormun,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 523.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 14,
    name: 'Tyrion 25',
    image: Tyrion,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 233.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 15,
    name: 'Tormun 25',
    image: Brienne,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 122.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 16,
    name: 'Tyrion 25',
    image: Dany,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 311.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 17,
    name: 'Tormun 25',
    image: King,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 456.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 18,
    name: 'Tyrion 25',
    image: Ghost,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 435.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 19,
    name: 'Tormun 25',
    image: Jon,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 456.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 20,
    name: 'Tyrion 25',
    image: Tormun,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 234.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 21,
    name: 'Tormun 25',
    image: Davos,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 645.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
  {
    id: 22,
    name: 'Tyrion 25',
    image: Ghost,
    marca: 'Funko',
    text: 'Funko POP | game of Thrones',
    quantity: 1,
    price: 345.50,
    season: 0,
    day: 'off',
    news: 'off'
  },
] 

export const brands = [
  {
    id: 1,
    image: Disney,
  },
  {
    id: 2,
    image: Funko,
  },
  {
    id: 3,
    image: LOL,
  },
  {
    id: 4,
    image: Marvel,
  },
]

export const mostWanted = [
  {
    id: 1,
    image: Dino,
    name: 'Dinosaurio robot para armar'
  },
  {
    id: 2,
    image: BackpackDino,
    name: 'Mochila de ToyStory Dinosaurio REX'
  },
  {
    id: 3,
    image: Dino,
    name: 'Dinosaurio robot para armar'
  },
  {
    id: 4,
    image: BackpackDino,
    name: 'Mochila de ToyStory Dinosaurio REX'
  },
  {
    id: 5,
    image: Dino,
    name: 'Dinosaurio robot para armar'
  },
]

// Campaign
export const Campaign = [
  {
    id: 1,
    name: 'Mochila Madalyn Floral',
    image: Backpack1,
    marca: 'Jansport',
    price: 211.50,
    season: 1,
    final: 1.269,
    news: 'on'
  },
  {
    id: 2,
    name: 'Mochila Madalyn Floral',
    image: Backpack2,
    marca: 'Jansport',
    price: 211.50,
    season: 1,
    final: 1.269,
    news: 'on'
  },
] 

export const SocialsData = [
  {
    id: 1,
    name: "Instagram",
    icon: <FiInstagram />
  },
  {
    id: 2,
    name: "Youtube",
    icon: <FiYoutube />
  },
  {
    id: 3,
    name: "Facebook",
    icon: <FiFacebook />
  },
]

// Icons
export const icons = [
  {
    id: 1,
    image: Afip,
  },
  {
    id: 2,
    image: Ahora,
  },
  {
    id: 3,
    image: Cace,
  },
  {
    id: 4,
    image: Cruce,
  },
  {
    id: 5,
    image: Off,
  },
  {
    id: 6,
    image: Vtex,
  },
]
// Filtros
export const filter = [
  {
    id: 1,
    name: "filtro 1",
  },
  {
    id: 2,
    name: "filtro 2",
  },
  {
    id: 3,
    name: "filtro 3",
  },
  {
    id: 4,
    name: "filtro 4",
  },
]

// Alert 
export const AlertData = {
  text: "Aprovecha hasta 18 cuotas sin interes",
  show: true
}

export const bannerTop = {
  text: "Solo por hoy envio gratis en todos los productos!",
  show: true
}