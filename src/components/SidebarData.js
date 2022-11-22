import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Estructura de datos',
    path: '/estructuradedatos',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Estáticas',
        path: '/estructuradedatos/estaticas',
      },
      {
        title: 'Dinámicas',
        path: '/estructuradedatos/dinamicas',
      }
    ]
  },
  {
    title: 'Tabla Hash',
    path: '/tablahash',

  }
];
