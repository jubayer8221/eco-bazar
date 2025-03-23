import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl[200px] md:pr[200px] xl:pl-[100px] xl:pr-[100px] pt-20 pb-20 font-poppins'>
      <div className='w-full overflow-x-auto scrollbar-hiden'>
        <div className='flex items-center justify-between gap-10 w-max'>
          <div><Image src="/images/steps.svg" alt='' width={66} height={32} className='transition-transform duration-300 hover:scale-125 hover:opacity-95' /></div>
          <div className='text-[#E6E6E6]'>|</div>
          <div><Image src="/images/bookoff.svg" alt='' width={66} height={32} className='transition-transform duration-300 hover:scale-125 hover:opacity-95' /></div>
          {Array(10).fill(null).map((_, index)=>(
            <React.Fragment key={index}>
              <div className='text-[#E6E6E6]'>|</div>
              <div><Image src="/images/Gserie.svg" alt='' width={66} height={32} className='transition-transform duration-300 hover:scale-125 hover:opacity-95' /></div>
              
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
