import { Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className='w-[100%] h-[50px] bg-gray-100 px-4 py-3 rounded-[6px] flex items-center gap-3'>
            <input
                type="text"
                placeholder='Search for products...'
                className='outline-none w-full text-[15px]'
            />
            <SearchIcon color='inherit' fontSize='small' />
        </div>
    )
}

export default Search