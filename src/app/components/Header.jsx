"use client";

import Link from 'next/link'
import React from 'react'
import Logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Search from './search/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Tooltip from '@mui/material/Tooltip';
import Navbar from './navbar/Navbar';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    return (
        <header className='bg-white'>
            <div className=' py-2 border-y border-gray-100'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[14px] font-[500]'>Get 50% off on new season styles </p>
                        </div>
                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='text-[12px] link font-[500] transition'>
                                    <Link href="/">
                                        Help center
                                    </Link>
                                </li>
                                <li className='text-[12px] link font-[500] transition'>
                                    <Link href="/order-tracking">
                                        Order tracking
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className='header border-b-[1px] border-gray-100'>
                <div className='container flex items-center'>
                    <div className='w-[30%]'>
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt='Logo'
                                className='w-[150px] h-[90px]'
                            />
                        </Link>
                    </div>
                    <div className='w-[45%]'>
                        <Search />
                    </div>
                    <div className='w-[30%] pl-7'>
                        <ul className='w-full flex items-center justify-end gap-4'>
                            <li>
                                <Link href="/signin" className='link transition text-[15px] font-[500]'>
                                    Sign in / Register
                                </Link>
                            </li>
                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <CompareOutlinedIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart">

                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <ShoppingCartOutlinedIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                            </li>
                            <li>
                                <Tooltip title="Favourite">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FavoriteBorderOutlinedIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>

    )
}

export default Header