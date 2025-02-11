import Image from 'next/image'
import React from 'react'
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const MiddleNavbar = () => {
  return (
    <>
        <div className="pt-8 pb-8 pl-[300px] pr-[300px] flex justify-between bg-white">
             {/* logo */}
             <div className=' flex items-center gap-1'>
                <Image src="/icons/logo.png" alt='' width={32} height={30} />
                <samp className='font-poppins font-medium text-[32px] leading-[38px] tracking-[-0.03em] text-[#002603]'>Ecobazar</samp>
             </div>
             {/* search */}
             <div className=' flex items-center border rounded-lg overflow-hidden'>
                <div className='p-2'>
                <GoSearch className='w-[15px] h-[15px] text-[#1A1A1A]' />
                </div>
                <input type="text" placeholder='search' className=' flex-grow outline-none' />
                <button className='text-[14px] bg-[#00B207] pt-[14px] pb-[14px] pr-[24px] pl-[24px] text-white'>Search</button>
             </div>
             {/* icon  */}
             <div className='flex items-center gap-5'>
                <div>
                    <Image src="/icons/save.svg" alt='' width={28} height={24} className='text-black hover:text-white' />
                </div>
                <span className='text-[#E6E6E6]'>|</span>
                <div className='flex items-center gap-1'>
                    <div>
                        <div className='relative cursor-pointer'>
                        <HiOutlineShoppingBag className='w-[25px] h-[25px] text-[#1A1A1A]' />
                        </div>
                        <div className='absolute bg-[#2C742F] w-3 h-3 flex items-center justify-center rounded-full text-white text-[10px] top-[81px] right-[380px]'>
                            2
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-[11px] leading-[13.5px'>Shopping Cart:</p>
                        <p className='text-[14px] leading-[14px] font-medium'>$57.00</p>
                    </div>
                </div>
             </div>
        </div>
    </>
  )
}

export default MiddleNavbar
