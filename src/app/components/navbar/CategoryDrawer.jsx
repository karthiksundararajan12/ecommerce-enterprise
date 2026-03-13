import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';

const CategoryDrawer = ({ open, toggleDrawer }) => {
    const [menuIndex, setMenuIndex] = useState(null);
    const [innerMenuIndex, setInnerMenuIndex] = useState(null);

    const openSubMenu = (index) => {
        if (menuIndex === index) {
            setMenuIndex(null)
        } else {
            setMenuIndex(index)
        }
    }

    const openInnerMenu = (index) => {
        console.log(index)
        if (innerMenuIndex === index) {
            setInnerMenuIndex(null)
        } else {
            setInnerMenuIndex(index)
        }
    }
    console.log(innerMenuIndex)
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <h3 className='px-3 py-3 font-normal text-[18px] flex items-center justify-between'>Shop by category <CloseOutlinedIcon className='cursor-pointer' onClose={toggleDrawer(false)} /></h3>
            <div className='scroll'>
                <ul className='w-full'>
                    <li className=' px-3'>
                        <Link href="/" className='w-full flex  items-center justify-between'>
                            <Button variant='text' className='w-[50%] text-[rgba(0,0,0,0.8)]! justify-start! '>Fashion </Button>
                            {menuIndex === 0 ? (
                                <RemoveCircleOutlineOutlinedIcon
                                    className='cursor-pointer'
                                    onClick={() => openSubMenu(0)}
                                />
                            ) : (
                                <AddCircleOutlineOutlinedIcon className='cursor-pointer' onClick={() => openSubMenu(0)} />
                            )}
                        </Link>
                    </li>
                    {menuIndex === 0 && (
                        <ul className='ml-5 sub-menu'>
                            <li className=' px-3'>
                                <Link href="/" className='w-full flex  items-center justify-between'>
                                    <Button variant='text' className='w-[50%] text-[rgba(0,0,0,0.8)]! justify-start! '>Apparels </Button>
                                    {innerMenuIndex === 0 ? (
                                        <RemoveCircleOutlineOutlinedIcon
                                            className='cursor-pointer'
                                            onClick={() => openInnerMenu(0)}
                                        />
                                    ) : (
                                        <AddCircleOutlineOutlinedIcon className='cursor-pointer' onClick={() => openInnerMenu(0)} />
                                    )}
                                </Link>
                            </li>
                            {innerMenuIndex === 0 && (
                                <ul className='ml-8 inner_sub_menu'>
                                    <li className='mb-2'>
                                        <Link href="/" className='link text-[14px]'>Apparel</Link>
                                    </li>
                                    <li className='mb-2'>
                                        <Link href="/" className='link text-[14px]'>Smart Tablet</Link>
                                    </li>
                                    <li className='mb-2'>
                                        <Link href="/" className='link text-[14px]'></Link>
                                    </li>
                                    <li className='mb-2'>
                                        <Link href="/" className='link text-[14px]'>Crepe tablet</Link>
                                    </li>
                                    <li className='mb-2'>
                                        <Link href="/" className='link text-[14px]'>Leather watch</Link>
                                    </li>
                                </ul>
                            )}
                        </ul>
                    )}
                </ul>
            </div>
        </Box>
    );

    return (
        <div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default CategoryDrawer