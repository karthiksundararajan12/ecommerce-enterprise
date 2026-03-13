import React, { useState } from 'react'
import FASHION_IMAGE from '../../../../public/images/product/fashion.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductItem = () => {
    const [value, setValue] = useState(4);

    return (
        <div className='group max-w-[230px] shadow-lg  overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 rounded-lg mb-4 '>
            <div className='relative w-full aspect-[5/5] overflow-hidden bg-gray-50'>
                <Image
                    src={FASHION_IMAGE}
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                    alt="image" />
                <span className='flex items-center bg-[#ff5722] absolute top-3 left-2 rounded-md text-white text-[12px] p-1'>10%</span>
                {/* overlay */}
                <div className='absolute top-3 right-[-50px] group-hover:right-3 transition-all duration-300 flex flex-col gap-2'>
                    <button className='w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#ff5722] hover:text-white transition-colors duration-300 cursor-pointer'>
                        <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                    </button>
                    <button className='w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#ff5722] hover:text-white transition-colors duration-300 cursor-pointer'>
                        <VisibilityIcon sx={{ fontSize: 20 }} />
                    </button>
                </div>

                {/* --- Bottom Slide-up Button --- */}
                <div className='absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                    <button className='w-full py-2.5 bg-black/80 backdrop-blur-sm text-white text-[12px] font-bold uppercase flex items-center justify-center gap-2 hover:bg-[#ff5722] transition-colors cursor-pointer'>
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />
                        Add to Cart
                    </button>
                </div>
                {/* End */}
            </div>
            <div className='info p-3'>
                <h3 className='text-[14px] font-bold text-gray-900 truncate uppercase tracking-tight'>SASSAFRAS</h3>
                <p className='text-[12px] text-gray-500 truncate'>High Neck Bodycon Dress</p>

                <div className='flex items-center gap-2 mt-2'>
                    <span className='text-[14px] font-bold text-gray-900'>$499</span>
                    <span className='text-[11px] text-gray-400 line-through'>$999</span>
                    <span className='text-[11px] text-orange-500 font-semibold'>(50% OFF)</span>
                </div>

                <div className='mt-2'>
                    <Rating name="read-only" value={4} size="small" readOnly />
                </div>
            </div>
        </div>
    )
}

export default ProductItem