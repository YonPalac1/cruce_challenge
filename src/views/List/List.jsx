import React from 'react'
import { useSelector } from 'react-redux'

import Banner from './components/Banner'
import Filters from './components/Filters'
import KeywordSearch from './components/KeywordSearch'
import Productos from './components/Productos'

import Footer from '../../commons/Footer/Footer'

const List = () => {
  const key = useSelector(state => state.data.keywords);
  return (
    <div className="bg-white">
      <div className="mt-24 pt-5 md:mt-24 lg:w-[1024px] mx-auto">
        <Banner />
        { 
          key && <KeywordSearch />
        }
        
        <Filters />
        <Productos />
      </div>
      <Footer />
    </div>
  )
}

export default List