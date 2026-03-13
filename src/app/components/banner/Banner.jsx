import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import IMAGE_1 from '../../../../public/images/banner/image1.jpg'
import IMAGE_2 from '../../../../public/images/banner/image2.jpg'
import IMAGE_3 from '../../../../public/images/banner/image3.jpg'
import IMAGE_4 from '../../../../public/images/banner/image4.jpg'
import IMAGE_5 from '../../../../public/images/banner/image5.jpg'

import Image from 'next/image';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};
const Banner = () => {
    const images = [IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5];
    return (
        <div className='container py-4'>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                showDots={true}
                arrows={true}
                containerClass="h-[300px] md:h-[450px] rounded-xl overflow-hidden"
                itemClass="w-full"
                dotListClass="custom-dot-list"
            >
                {images.map((img, index) => (
                    <div key={index} className=' w-full h-[300px] md:h-[450px]'>
                        <Image
                            src={img}
                            alt={`banner-${index}`}
                            fill
                            priority={index === 0} // Load first image immediately
                            className="object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div >
    )
}

export default Banner