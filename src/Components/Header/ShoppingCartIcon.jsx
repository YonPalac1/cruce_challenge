import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';

// Import icons 
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { backdropReducer } from '../../redux/dataReducer';

const ShoppingIcon = () => {
    const cartQuantity = useSelector(state => state.data.cart);
    const [showBackdrop, setShowBackdrop] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(backdropReducer(showBackdrop))
    }, [cartQuantity, showBackdrop])
    
  return (
    <div onClick={() => setShowBackdrop(!showBackdrop)} className='flex m-4 cursor-pointer'>
        <ShoppingCartIcon className='w-8 h-8' />
        {
            cartQuantity && <b className='text-red'>{cartQuantity.length}</b>
        }
    </div>
  )
}

export default ShoppingIcon