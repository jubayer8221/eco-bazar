'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TopNabar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
    };

    return (
        <div className="text-[12px] text-[#666666] pt-3 pb-3 xl:pl-[100px] xl:pr-[100px] flex justify-between bg-white drop-shadow-[0px_2px_1px_rgba(229,229,229,1)] relative">
            <div className="flex items-center">
                <Image src="/icons/location.png" alt="" width={15} height={18} />
                <span className="font-poppins ml-1">
                    Store Location: Lincoln- 344, Illinois, Chicago, USA
                </span>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 relative">
                    
                    {/* Language Dropdown */}
                    <div className="relative">
                        <button onClick={() => toggleDropdown("lang")} className="flex items-center">
                            ENG <IoIosArrowDown className={`w-3 transition-transform duration-200 ${activeDropdown === "lang" ? "rotate-180": ""}`} />
                        </button>
                        {activeDropdown === "lang" && (
                            <div className="rounded-md text-sm p-1 absolute top-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
                                <p>ENG</p>
                                <p>BNG</p>
                            </div>
                        )}
                    </div>

                    {/* Currency Dropdown */}
                    <div className="relative">
                        <button onClick={() => toggleDropdown("usd")} className="flex items-center">
                            USD <IoIosArrowDown className={`w-3 transition-transform duration-200 ${activeDropdown === "usd" ? "rotate-180": ""}`} />
                        </button>
                        {activeDropdown === "usd" && (
                            <div className="rounded-md text-sm p-1 absolute top-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
                                <p>USD</p>
                                <p>BDT</p>
                            </div>
                        )}
                    </div>
                </div>

                <span className="text-[#E6E6E6]">|</span>

                <div className="flex gap-1">
                    <Link href="/singin">Sing in</Link>
                    <span>/</span>
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default TopNabar;
