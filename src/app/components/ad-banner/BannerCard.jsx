import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerCard = ({ img, link }) => {
    return (
        <div className='rounded-lg transition-all group-hover:scale-110 '>
            <Link href={link}>
                <Image src={img} className='rounded-lg' alt="img" />
            </Link>
        </div>
    )
}

export default BannerCard