'use client'
import Image from 'next/image';
import React, { useState } from 'react'

import { CiInstagram } from "react-icons/ci";

const FolowInstagram = () => {
    const [isHover, setIsHover] = useState(false);
  return (
    <div className='flex items-center justify-between gap-5 w-max' onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
      <div className='flex items-center justify-center'>
        <div className={`relative w-[200px] h-[200px]`}>
        <Image src="/images/Instagram Post 4.png" alt='' layout='fill' objectFit='cover' />
        </div>
    {
        isHover ? (
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
        ): (
            <CiInstagram className='absolute text-[#FFFFFF] text-[24px]' />
        )
    }
        
      </div>
    </div>
  )
}

export default FolowInstagram
