import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from '../product/ProductItem';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 7 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 5 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 5 }
};
const ProductSlider = () => {
    return (
        <div className='w-full  pt-0 '>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                itemClass="pb-10 px-1" // Adds spacing between cards
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >

                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />

            </Carousel>
        </div>
    )
}

export default ProductSlider