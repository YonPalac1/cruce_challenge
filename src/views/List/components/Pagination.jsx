import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex justify-center text-black'>
        {pageNumbers.map(item => {
          return <li key={item} onClick={() => paginate(item)} className="p-3 cursor-pointer hover:text-green">
            <Link to="/listado-coleccionables">{item}</Link>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default Pagination