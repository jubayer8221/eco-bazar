'use client'
import React from 'react'
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

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
      <div className=''>
        <h1>"</h1>
        {/* review  */}
        <p>{review}</p>

        {/* info */}
        <div>
            <div>
                <div>{img}</div>
                <div>
                    <h5>{name}</h5>
                    <p>{role}</p>
                </div>
            </div>
            <div className=''>{generateRating(rating)}</div>
        </div>
      </div>
    </div>
  )
}

export default FeadBackCart
