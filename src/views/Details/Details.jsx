import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import Producto from '../../Components/Productos/Producto'

const Details = () => {
    const dataToys = useSelector(state => state.data.detailsToys)
    
  return (
    <div className="bg-white">
        <div className="section mt-24 lg:w-[1024px] mx-auto">
            <Producto item={dataToys}
              grid={
                "col-span-2 md:flex py-2 mx-auto justify-center"
              }
              img={
                "w-[120px] h-[164px] md:w-[260px] md:h-[338px] lg:w-[260px] lg:h-[338px]"
              }  />
        </div>
        <Footer />
    </div>
  )
}

export default Details