'use client'
import React from 'react'
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Image from 'next/image';

interface propsType {
    img: string;
    name: string;
    review: string;
    rating: number;
    role: string;
}

const FeadBackCart: React.FC<propsType> = ({img, name, review, rating, role}) => {

    const generateRating = (rating: number)=>{
        switch(rating){
            case 1:
                return (
                    <div className='flex gap-1 text-[#FF8A00]'>
                        <IoStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                    </div>
                )
            case 2:
                return (
                    <div className='flex gap-1 text-[#FF8A00]'>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                    </div>
                )
            case 3:
                return (
                    <div className='flex gap-1 text-[#FF8A00]'>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                    </div>
                )
            case 4:
                return (
                    <div className='flex gap-1 text-[#FF8A00]'>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <CiStar className='text-[9.75px]'/>
                    </div>
                )
            case 5:
                return (
                    <div className='flex gap-1 text-[#FF8A00]'>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                        <IoStar className='text-[9.75px]'/>
                    </div>
                )

            default: 
                return null
        }
    }
  return (
    <div>
      <div className='bg-[#FFFFFF] p-3 w-[295px] rounded-md'>
        <h1 className='text-[#00B207] text-[32px] opacity-30'>"</h1>
        {/* review  */}
        <p className='text-[#848484] text-[14px] leading-5 font-normal'>{review}</p>

        {/* info */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center '>
                <div className='w-[56px] h-[56px] rounded-full flex items-center'><Image src={img} alt='' width={40} height={40} /></div>
                <div>
                    <h5 className='text-[16px] font-medium leading-6'>{name}</h5>
                    <p className='text-[14px] leading-5 font-normal text-[#999999]'>{role}</p>
                </div>
            </div>
            <div className=''>{generateRating(rating)}</div>
        </div>
      </div>
    </div>
  )
}

export default FeadBackCart
