'use client'
import Image from 'next/image'
import React from 'react'

import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";


interface propsType{
    img: string;
    title: string;
    price: string;
    rating: number;
    sale: string;
    oldPrice: string;
    bestSale: string;
}


const HotdealsCart: React.FC<propsType> = ({ img, title, price, rating, sale, oldPrice, bestSale }) => {

   const generateRating = (rating: number) =>{
    switch (rating){
        case 1:
            return <div className='flex gap-1 text-[#FF8A00]'>
                <IoStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
            </div>
        case 2:
            return <div className='flex gap-1 text-[#FF8A00]'>
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
            </div>
        case 3:
            return <div className='flex gap-1 text-[#FF8A00]'>
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
            </div>
        case 4:
            return <div className='flex gap-1 text-[#FF8A00]'>
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <CiStar className='text-[9.75px]' />
            </div>
        case 5:
            return <div className='flex gap-1 text-[#FF8A00]'>
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
                <IoStar className='text-[9.75px]' />
            </div>
        default:
            return null;
    }
   };
  return (
    <div className='bg-white relative overflow-hidden border pt-1 px-2 border-[#F2F2F2] max-w-[270px]'>
        <div className='absolute'>
        {
            sale && (
                <span className='bg-[#EA4B48] pt-[1px] pb-[1px] pl-[4px] pr-[4px] rounded-sm text-[10px] leading-4 text-white'>Sale: {sale}</span>
            )
        }
        {
            bestSale && (
                <span className='ml-2 bg-[#2388FF] pt-[1px] pb-[1px] pl-[4px] pr-[4px] rounded-sm text-[10px] leading-4 text-white'>Best Sale</span>
            )
        }
        </div>
      <div className='pt-5'>
        <Image className='w-full h-auto' src={img} width={264} height={240} alt='' />
      </div>
      
      <div className='pb-3 bottom-0 mt-2'>
        <h3 className='text-[14px] leading-[21px] text-[#4D4D4D]'>{title}</h3>
        <div className='flex items-center justify-between'>
            <p className='text-4 leading-6 font-medium'>{price}</p>
            <div className='bg-[#F2F2F2] w-6 h-6 rounded-full p-1 flex items-center justify-center'><HiOutlineShoppingBag className='' /></div>
        </div>
        <div className='mt-2'>{generateRating(rating)}</div>
      </div>
    </div>
  )
}

export default HotdealsCart
