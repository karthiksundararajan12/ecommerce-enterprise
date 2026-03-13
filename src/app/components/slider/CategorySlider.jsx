import React from 'react'
import Image from 'next/image';
import Fashion_Image from '../../../../public/icons/fashion.png';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { categories } from '../../../../public/constants/constant';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
};
const CategorySlider = () => {
    return (
        <div className='container py-8 pt-4'>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                itemClass="px-2" // Adds spacing between cards
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="px-1"

            >

                {categories.map(cat => (
                    <Link href="/" key={cat.id}>
                        <div className=' bg-white p-3 rounded-md flex flex-col items-center justify-center item' >
                            <Image src={cat.image} alt="image" width={50} height={50} className='img transition-all' />
                            <h3 className='font-[500] mt-2 text-[18px]'>{cat.title}</h3>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}

export default CategorySlider