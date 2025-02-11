'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TopNabar = () => {
    const [langues, setLangues] = useState(false);
    // const [languesChange, setLanguesChange] = useState('');
    const [usd, setUsd] = useState(false);

    // const handleLanguesChange = (e: React.FormEvent<HTMLFormElement>) =>{
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const selectedLanguage = formData.get('language') as string;
    //     setLanguesChange(selectedLanguage);

    // }

  return (
    <div className="text-[12px] text-[#666666] pt-3 pb-3 pl-[300px] pr-[300px] flex justify-between bg-white drop-shadow-[0px_2px_1px_rgba(229,229,229,1)]">
      <div className="flex items-center">
        <Image src="/icons/location.png" alt="" width={15} height={18} />
        <span className=" font-poppins ml-1">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center relative" onClick={()=>setLangues(prev => !prev)}>
            Eng <IoIosArrowDown className="w-3" />
          </Link>
          <Link href="/" className="flex items-center" onClick={()=>setUsd(prev => !prev)}>
            USD <IoIosArrowDown className="w-3" />
          </Link>
          {
            langues && (
                <div className=" rounded-md text-sm p-1 absolute top-11 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                    <p>Eng</p>
                    <p>Bng</p>
                    {/* <form action="" onSubmit={handleLanguesChange} className="flex flex-col gap-y-1">
                    <select name="language" id="language">
                        <option value="English">Eng</option>
                        <option value="Bangla">Bng</option>
                    </select>
                    </form> */}
                </div>
            )
          }
          {/* USD */}
          {
            usd && (
                <div className=" rounded-md text-sm p-1 absolute top-11 shadow-[0_3px_10px_rgb(0,0,0,0.2)] right-[430px] ">
                    <p>USD</p>
                    <p>BDT</p>
                    {/* <form action="" onSubmit={handleLanguesChange} className="flex flex-col gap-y-1">
                    <select name="language" id="language">
                        <option value="English">Eng</option>
                        <option value="Bangla">Bng</option>
                    </select>
                    </form> */}
                </div>
            )
          }
        </div>
        <span className="text-[#E6E6E6]">|</span>
        <div className="flex gap-1">
          <Link href="/singin" className="">
            Sing in
          </Link>
          <span>/</span>
          <Link href="/login" className="">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNabar;
