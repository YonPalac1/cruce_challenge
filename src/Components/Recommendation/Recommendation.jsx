import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Producto from '../Productos/Producto';

const Recommendation = () => {
    const newsToys = useSelector(state => state.data.toys)
    const [news, setNews] = useState([])

    useEffect(() => {
        const toys = newsToys.filter(item => item.news === 'on')
        setNews(toys)
    }, [])

  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-4'>
        {
            news.map(item => {
                return <Producto item={item} grid={'flex flex-col'} key={item.id} />
            })
        }
    </div>
  )
}

export default Recommendation