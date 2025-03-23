import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter, FaPinterestP } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className='px-3 sm:px-[100px] md:px-[140px] xl:px-[100px] py-7 bg-[#F7F7F7] font-poppins'>
      <div className='flex flex-col md:flex-col xl:flex-row items-center justify-between gap-10'>
        <div className='text-center md:text-center xl:text-left w-full'>
          <h1 className='text-[20px] sm:text-[22px] md:text-[22px] xl:text-[22px] leading-9 font-semibold'>
            Subscribe to our Newsletter
          </h1>
          <p className='text-[12px] md:text[10px] xl:text-[12px] leading-5 font-normal mt-1 text-[#999999]'>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
          </p>
        </div>
        
        {/* Subscribe form and social icons */}
        <div className='flex flex-col xl:flex-row items-center gap-4 w-full md:w-auto'>
          {/* Subscribe input */} 
          <div className='flex items-center h-12 bg-white rounded-full overflow-hidden border border-[#E6E6E6] w-full md:w-auto'>
            <input 
              type="text" 
              placeholder='Your email address' 
              className='outline-none p-3 text-gray-700 flex-1 min-w-[100px]' 
            />
            <button className='text-white text-[14px] font-semibold bg-[#00B207] py-[14px] px-7 rounded-full whitespace-nowrap'>
              Subscribe
            </button>
          </div>
          
          {/* Social icons */}
          <div className='flex items-center gap-2'>
            {[BiLogoFacebook, FaPinterestP, FaTwitter, FaInstagram].map((Icon, index) => (
              <div key={index} className='flex items-center justify-center bg-[#F7F7F7] rounded-full p-2 hover:bg-[#00B207]'>
                <Icon className='text-[18px] text-[#4D4D4D] hover:text-white' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
