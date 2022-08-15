import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';

import { showSearchInput } from '../../redux/dataReducer';

import { SearchCircleIcon } from '@heroicons/react/outline';

const SearchIcon = () => {
    const dispatch = useDispatch();
    const [showInput, SetShowInput] = useState(false) 

    useEffect(() => {
      dispatch(showSearchInput(showInput))
    }, [showInput])

  return (
    <div>
        <SearchCircleIcon onClick={() => SetShowInput(!showInput)} className="w-8 h-8 m-4 cursor-pointer text-secondary" />
    </div>
  )
}

export default SearchIcon