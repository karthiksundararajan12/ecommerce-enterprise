import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import banner_1 from '../../../../public/images/sale/banner_1.jpg'
import banner_2 from '../../../../public/images/sale/banner_2.jpg'
import banner_3 from '../../../../public/images/sale/banner_3.jpg'
import banner_4 from '../../../../public/images/sale/banner_4.jpg'
import banner_5 from '../../../../public/images/sale/banner_5.jpg'
import banner_6 from '../../../../public/images/sale/banner_6.jpg'

import Image from 'next/image';
import BannerCard from './BannerCard';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 4 }
};
const AdBanner = () => {
    return (
        <div className='py-10'>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                itemClass="px-2" // Adds spacing between cards
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="px-1 mx-1"
            >

                <BannerCard
                    img={banner_1}
                    link="/"
                />
                <BannerCard
                    img={banner_2}
                    link="/"
                />
                <BannerCard
                    img={banner_3}
                    link="/"
                />
                <BannerCard
                    img={banner_4}
                    link="/"
                />
            </Carousel>
        </div>
    )
}

export default AdBanner