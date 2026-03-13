"use client"
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, FormControlLabel, Radio, Rating, Slider } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const Sidebar = () => {



    return (
        <div>
            <h3 className='text-[16px] uppercase font-[500]'>Filters</h3>
            <Divider className='py-2' />
            <div className='pt-3'>
                <div className='h-[200px] overflow-y-scroll'>
                    <h3 className='text-[14px] uppercase font-[500]'>Categories</h3>
                    <ul className='pt-3'>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                    </ul>
                </div>
                <Divider className='py-2' />
                <div className='h-[200px] overflow-y-scroll overflow-x-hidden pt-2'>
                    <h3 className='text-[14px] uppercase font-[500]'>Brands</h3>
                    <ul className='pt-3'>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                                size="small"
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <CheckBox
                                checked={false}
                            />
                            <h5 className='font-[400] text-[14px] text-gray-400'>T-shirts</h5>
                        </li>
                    </ul>
                </div>
                <Divider className='py-2' />
                <div className='pt-2'>
                    <h3 className='text-[14px] uppercase font-[500]'>Price</h3>
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        className='text-primary!'
                    />
                    <div className='flex items-center gap-3'>
                        <h6 className='flex items-center gap-1 text-[14px] font-[500]'>
                            <CurrencyRupeeOutlinedIcon fontSize='10' />
                            <span className='p-0'>100</span>
                        </h6>
                        -
                        <h6 className='flex items-center gap-1 text-[14px] font-[500]'>
                            <CurrencyRupeeOutlinedIcon fontSize='10' />
                            <span className='p-0'>10000</span>
                        </h6>
                    </div>
                </div>
                <Divider className='py-2' />
                <div className='pt-2'>
                    <h3 className='text-[14px] uppercase font-[500]'>Rating</h3>
                    <div className='pt-2'>
                        <div className='flex items-center gap-1'>
                            <FormControlLabel value="female" control={<Radio className='' size='small' />} label="1" className='mr-0!' />
                            <Rating
                                name="simple-uncontrolled"
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                }}
                                defaultValue={1}
                                className='ml-0!'
                            />
                        </div>
                        <div className='flex items-center gap-1'>
                            <FormControlLabel value="female" control={<Radio className='' size='small' />} label="2" className='mr-0!' />
                            <Rating
                                name="simple-uncontrolled"
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                }}
                                defaultValue={2}
                                className='ml-0!'
                            />
                        </div>
                        <div className='flex items-center gap-1'>
                            <FormControlLabel value="female" control={<Radio className='' size='small' />} label="3" className='mr-0!' />
                            <Rating
                                name="simple-uncontrolled"
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                }}
                                defaultValue={3}
                                className='ml-0!'
                            />
                        </div>
                        <div className='flex items-center gap-1'>
                            <FormControlLabel value="female" control={<Radio className='' size='small' />} label="4" className='mr-0!' />
                            <Rating
                                name="simple-uncontrolled"
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                }}
                                defaultValue={4}
                                className='ml-0!'
                            />
                        </div>
                        <div className='flex items-center gap-1'>
                            <FormControlLabel value="female" control={<Radio className='' size='small' />} label="5" className='mr-0!' />
                            <Rating
                                name="simple-uncontrolled"
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                }}
                                defaultValue={5}
                                className='ml-0!'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar