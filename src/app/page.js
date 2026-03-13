"use client";

import Header from "./components/Header";
import AdBanner from "./components/ad-banner/AdBanner";
import Banner from "./components/banner/Banner";
import CategorySlider from "./components/slider/CategorySlider";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import ProductSlider from "./components/product-slider/ProductSlider";
import Footer from "./components/footer/Footer";

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Banner />
      <CategorySlider />

      <section className="bg-white py-4">
        <div className="container">
          <div className="flex items-center justify-between mb-5">
            <div className="leftSec w-[60%]">
              <h3 className="text-[22px] font-[600]">Popular products</h3>
              <p className="text-[14px] font-[500]">Do not miss the currect offers until the end of March.</p>
            </div>
            <div className="rightSec w-[65%]">
              <Box sx={{ maxWidth: { xs: 320, sm: 780 }, bgcolor: 'background.paper' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Appliance" />
                  <Tab label="Beauty" />
                  <Tab label="Electronics" />
                  <Tab label="Furniture" />
                  <Tab label="Sports" />
                  <Tab label="Mobile" />
                  <Tab label="Toys" />
                </Tabs>
              </Box>
            </div>
          </div>
          <ProductSlider items={4} />
        </div>
      </section>
      <section className="bg-white ">
        <div className="container">
          <div className="shipping border-1 border-[#fbc02d] py-4 px-4 flex items-center justify-between rounded-md mb-4">
            <div className="flex items-center  gap-4">
              <LocalShippingIcon fontSize="large" />
              <span className="text-[25px] font-[600] uppercase">Free Shipping</span>
            </div>
            <div>
              <p className="mb-0 font-[500]">Free Delivery Now on your first Order and over $200</p>
            </div>
            <p className="font-[600] text-[24px]"> - Only $200 *</p>
          </div>
          <AdBanner />
        </div>
      </section>
      <section className="pt-0 bg-white">
        <div className="container">
          <h3 className="text-[22px] font-[600]">Latest products</h3>
          <ProductSlider items={4} />
          <AdBanner />
        </div>
      </section>
      <section className="pt-0 bg-white">
        <div className="container">
          <h3 className="text-[22px] font-[600]">Featured products</h3>
          <ProductSlider items={4} />
          <AdBanner />
        </div>
      </section>

    </div>
  );
}
