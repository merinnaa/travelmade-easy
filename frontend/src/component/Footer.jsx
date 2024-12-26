import React from 'react'
import emailAddress from '../asset/images/email-address.png'
import phoneIcon from '../asset/images/phone-icon.png'
import addressIcon from '../asset/images/address-icon.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    
    <footer className="w-full h-[409px] p-[100px] bg-[#34495b] justify-between items-start inline-flex">
    <div className="w-80 flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="h-[101px] flex-col justify-start items-start gap-6 flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-2xl font-bold font-['Montserrat']">Logo</div>
            </div>
            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-[#b9c8d8] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur. Eget morbi leo tellus purus facilisis turpis. Dui mauris ultricies sagittis placerat.</div>
            </div>
        </div>
        <div className="w-80 h-12 relative">
            <div className="w-80 h-12 px-6 py-4 left-0 top-0 absolute bg-white rounded-[400px] border border-[#c6c6c6] justify-start items-start gap-2.5 inline-flex">
                <input type='text' placeholder='Your Email@gmail.com' className="text-[#c6c6c6] text-xs font-medium font-['Montserrat'] leading-none tracking-wide" />
            </div>
            <div className="h-[36.50px] p-2.5 left-[276px] top-[6px] absolute bg-[#161c23] rounded-[40px] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden" />
        </div>
    </div>
    <div className="h-[196px] justify-between items-start flex">
        <div className="w-[53px] h-[196px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-white text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Menu</div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
                <Link to='home' className="justify-center items-center gap-2.5 inline-flex underline decoration-transparent hover:decoration-gray-300" >
                    <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Home</div>
                </Link>
                <Link to='about' className="justify-center items-center gap-2.5 inline-flex underline decoration-transparent hover:decoration-gray-300" >
                    <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">About</div>
                </Link>
                <Link to='service' className="justify-center items-center gap-2.5 inline-flex underline decoration-transparent hover:decoration-gray-300" >
                    <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Services</div>
                </Link>
                <Link to='explore' className="justify-center items-center gap-2.5 inline-flex underline decoration-transparent hover:decoration-gray-300" >
                    <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Explore</div>
                </Link>
                <Link to='review' className="justify-center items-center gap-2.5 inline-flex underline decoration-transparent hover:decoration-gray-300" >
                    <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Reviews</div>
                </Link>
            </div>
        </div>
        </div>
        <div className="h-[196px] justify-between items-start flex">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-white text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Terms And Conditions</div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
                <Link to='home' className="justify-center items-center gap-2.5 inline-flex underline decoration-transparent hover:decoration-gray-300" >
                    <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Privacy Policy</div>
                </Link>
                <Link to='home' className="justify-center items-center gap-2.5 inline-flex underline decoration-transparent hover:decoration-gray-300" >
                    <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Cookies Policy</div>
                </Link>
            </div>
        </div>
        </div>
        
        
        <div className="h-[196px] justify-between items-start flex">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-white text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Socials</div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="justify-start items-start gap-1 flex">
                        <img src={addressIcon} className="w-[30px] h-[30px] relative  overflow-hidden" />
                        <div className="justify-start items-start gap-2.5 flex">
                            <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Address:</div>
                        </div>
                    </div>
                    <div className="w-[163px] h-8 justify-start items-center gap-2.5 inline-flex">
<div className="grow shrink basis-0 text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">N0. 6, Travel Made Easy, Toronto, Canada</div>
</div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                        <img src={phoneIcon} className="w-[30px] h-[30px] relative  overflow-hidden" />
                       
                        <div className="justify-center items-center gap-2.5 flex">
                            <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Phone:</div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">+1234567890</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                        <img src={emailAddress} className="w-[30px] h-[30px] relative  overflow-hidden" />
                        <div className="justify-center items-center gap-2.5 flex">
                            <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Email:</div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-[#dce4ec] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">travelmadeeasy.org</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
      
    
  
  )
}

export default Footer
