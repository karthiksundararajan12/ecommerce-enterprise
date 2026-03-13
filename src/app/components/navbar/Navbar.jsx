import { Button } from '@mui/material'
import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Link from 'next/link';
import CategoryDrawer from './CategoryDrawer';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <div className='container flex items-center py-2'>
            <div className='col_1 w-[30%]'>
                <Button variant='text' className='!text-gray-600 !flex gap-1' onClick={toggleDrawer(true)}>
                    <MenuOutlinedIcon />
                    Shop by category
                    <KeyboardArrowDownOutlinedIcon className='!flex !justify-end ml-8' />
                </Button>
                <CategoryDrawer
                    open={open}
                    toggleDrawer={toggleDrawer}
                />
            </div>
            <div className='w-[65%]'>
                <ul className='flex items-center gap-4 nav'>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className='link transition text-[14px] font-[500] relative'>
                        <Link href="/">
                            Fashion
                        </Link>
                        {/* sub menu */}
                        <div className='sub_menu absolute top-8.75 left-[0%] min-w-45 bg-white shadow-md opacity-0 transition-all'>
                            <ul className='py-2'>
                                <li className='text-[rgba(0,0,0,0.8)] cursor-pointer text-[13px]  hover:bg-gray-300 w-full px-2 py-2 transition-all'>
                                    Menu
                                </li>
                                <li className='text-[rgba(0,0,0,0.8)] cursor-pointer text-[13px]  hover:bg-gray-300 w-full px-2 py-2  transition-all'>
                                    Women
                                </li>
                                <li className='text-[rgba(0,0,0,0.8)] cursor-pointer text-[13px]  hover:bg-gray-300 w-full px-2 py-2 transition-all'>
                                    Girls
                                </li>
                                <li className='text-[rgba(0,0,0,0.8)] cursor-pointer text-[13px]  hover:bg-gray-300 w-full px-2 py-2 transition-all'>
                                    Boys
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Electronics
                        </Link>
                    </li>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Bags
                        </Link>
                    </li>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Footware
                        </Link>
                    </li>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Groceries
                        </Link>
                    </li>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Beauty
                        </Link>
                    </li>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Jewellery
                        </Link>
                    </li>
                    <li className='link transition text-[14px] font-[500]'>
                        <Link href="/">
                            Wellness
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='w-[15%]'>
                <p className='font-[500] text-[13px]'>Free international delivery</p>
            </div>
        </div>
    )
}

export default Navbar