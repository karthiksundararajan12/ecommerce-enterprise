import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Link from 'next/link';
import { Button, TextField } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer py-6 bg-white border-t-1 border-[rgba(0,0,0,0.1)]'>
            <div className='container'>
                <div className='flex items-center justify-center gap-5 py-8 pb-5'>
                    <div className='col flex flex-col items-center group w-[20%]'>
                        <LocalShippingOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transition: 'all 0.5s ease-in-out', // MUI's internal way of handling transitions
                            }}
                            fontSize='large'
                            className=' group-hover:text-primary group-hover:-translate-y-1'
                        />
                        <h3 className='text-[16px] font-[600] mt-3'>Free Shipping</h3>
                        <p className='text-[12px] font-[400]'>For all orders above $100</p>
                    </div>
                    <div className='col flex flex-col items-center group w-[20%]'>
                        <PaymentOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transition: 'all 0.5s ease-in-out', // MUI's internal way of handling transitions
                            }}
                            fontSize='large'
                            className=' group-hover:text-primary group-hover:-translate-y-1'
                        />
                        <h3 className='text-[16px] font-[600] mt-3'>Secured Payment</h3>
                        <p className='text-[12px] font-[400]'>Payment card accepted</p>
                    </div>
                    <div className='col flex flex-col items-center group w-[20%]'>
                        <AssignmentReturnOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transition: 'all 0.5s ease-in-out', // MUI's internal way of handling transitions
                            }}
                            fontSize='large'
                            className=' group-hover:text-primary group-hover:-translate-y-1'
                        />
                        <h3 className='text-[16px] font-[600] mt-3'>30 days  return</h3>
                        <p className='text-[12px] font-[400]'>For an Exchange product</p>
                    </div>
                    <div className='col flex flex-col items-center group w-[20%]'>
                        <CardGiftcardOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transition: 'all 0.5s ease-in-out', // MUI's internal way of handling transitions
                            }}
                            fontSize='large'
                            className=' group-hover:text-primary group-hover:-translate-y-1'
                        />
                        <h3 className='text-[16px] font-[600] mt-3'>Special Gifts</h3>
                        <p className='text-[12px] font-[400]'>Our First Product Order</p>
                    </div>
                    <div className='col flex flex-col items-center group w-[20%]'>
                        <SupportAgentOutlinedIcon
                            sx={{
                                fontSize: 40,
                                transition: 'all 0.5s ease-in-out', // MUI's internal way of handling transitions
                            }}
                            fontSize='large'
                            className=' group-hover:text-primary group-hover:-translate-y-1'
                        />
                        <h3 className='text-[16px] font-[600] mt-3'>Support 24/7</h3>
                        <p className='text-[12px] font-[400]'>Contact us any time</p>
                    </div>
                </div>
                <hr className='text-gray-200 w-full' />
                <div className='footer-bottom  flex  py-8'>
                    <div className='part-1 w-[30%]  border-r-1 border-gray-200 '>
                        <h2 className='text-[18px] font-[600]'>Contact us</h2>
                        <p className='texxt-[13px] font-[500] text-[rgba(0,0,0,0.4)]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tempora reiciendis voluptatum alias.
                        </p>
                        <Link href="/" className='link block py-2' to="mailTo:sale@applattice.in">sale@applattice.in</Link>
                        <br />
                        <span className='text-[22px] pt-2 text-primary'>(+91) 9840227132</span>
                    </div>
                    <div className='part-2 w-[70%] flex gap-[160px] px-6'>
                        <div className='col-1 w-[20%]'>
                            <h2 className='text-[18px] font-[600]'>Product</h2>
                            <ul className='pt-2'>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Price drop</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>New Products</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Beast Sales</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Contact Us</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Site map</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Stores</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-2 w-[25%]'>
                            <h2 className='text-[18px] font-[600]'>Our Company</h2>
                            <ul className='pt-2'>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Price drop</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>New Products</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Beast Sales</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Contact Us</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Site map</Link>
                                </li>
                                <li className='text-[13px] font-[400] text-gray-400 font-[500] mb-2'>
                                    <Link href="/" className='link'>Stores</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 w-[40%]'>
                            <h2 className='text-[18px] font-[600]'>Subscribe To Newsletter</h2>
                            <p className='text-[13px] text-gray-400 font-[500] mt-2'>
                                Subscribe to out newsletter to  get news about special discounts
                            </p>
                            <div className='mt-4'>
                                <TextField id="outlined-basic" label="Email" variant="outlined" size='small' className="w-full" />
                                <Button variant="contained" className='mt-4! bg-primary!'>Subscribe</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer