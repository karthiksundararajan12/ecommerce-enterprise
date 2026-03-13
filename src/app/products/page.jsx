"use client"
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar';
import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import ProductItem from '../components/product/ProductItem';

const Products = () => {
    return (
        <section className='py-8'>
            <div className='container'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" className='link' color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                        className='link'
                    >
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>
            <div className='container flex gap-3 pt-4'>
                <div className='sidebar-wrapper w-[20%] bg-white h-full p-3'>
                    <Sidebar />
                </div>
                <div className='rightContent w-[80%]'>
                    <div className='grid grid-cols-4 md:grid-cols-4 gap-1'>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;