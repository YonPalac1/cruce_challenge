import React from 'react';

// import icons
import { MenuAlt1Icon } from '@heroicons/react/outline';

// Import data
import { navigation } from '../../data';

const Nav = () => {
  
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        <li className='flex'>
          <MenuAlt1Icon className='w-8 h-8' /> 
          <h2 className='text-primary'>Categorias</h2>
        </li>
        {
          navigation.map(item => {
            return <li key={item.id}><h2 className='text-secondary'>{ item.name }</h2></li>
          })
        }
        
      </ul>
    </nav>
  );
};

export default Nav;
