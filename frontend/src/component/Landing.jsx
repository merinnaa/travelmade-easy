import React from 'react'
import plane from '../asset/images/plane.png'

import hero from '../asset/images/hero.png'
import one from '../asset/images/1.png'
import two from '../asset/images/2.png'
import three from '../asset/images/3.png'
import design from '../asset/images/fluent_design-ideas-28-regular.png'
import speech from '../asset/images/speech.png'
import planner from '../asset/images/planner.png'
import checklist from '../asset/images/solar_checklist-minimalistic-linear.png'
import map from '../asset/images/uiw_map.png'
import lagos from '../asset/images/lagos.png'
import timessquare from '../asset/images/times-square.png'
import eiffeltower from '../asset/images/eiffel-tower.png'
import bahlapalace from '../asset/images/bahla-palace.png'
import heart from '../asset/images/heart.png'
import save from '../asset/images/save.png'
import star from '../asset/images/star.png'
const Landing = () => {
  return (
    <>
    <div className="w-full h-[840px] py-[50px] flex-col justify-start items-center gap-[41px] inline-flex">
    <div className="h-[248px] flex-col justify-start items-center gap-[30px] flex">
        <div className="self-stretch h-[170px] flex-col justify-start items-start gap-[18px] flex">
            <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-[#161c23] text-[45px] font-bold font-['Montserrat'] leading-[52px]">Seamless Planning For Extraordinary Trips</div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-[#777777] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">Lorem ipsum dolor sit amet consectetur. Nunc duis vulputate sit. Dui gravida sed tempor pulvinar. Lorem ipsum dolor sit amet consectetur. </div>
            </div>
        </div>
        <div className="justify-center items-start gap-5 inline-flex">
            <div className="h-12 px-6 py-4 bg-[#1f7a8c] rounded-[400px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-center text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Start Planning</div>
            </div>
        </div>
    </div>
    <div className="h-[451px] rounded-[20px] justify-center items-center inline-flex">
        <div className="w-[918px] h-[451px] rounded-[20px] justify-center items-center inline-flex">
            <img className="w-[918px] h-[451px] rounded-[20px]" src={hero} />
        </div>
    </div>
</div>

{/* second */}
<div className="flex flex-col  items-center  ">
  
  <div className="w-[992px] h-[430px] p-[100px] justify-between items-center inline-flex">
    <div className="w-[469px] flex-col justify-start items-start gap-9 inline-flex">
      {/* <div className="w-[992px] h-[430px] p-[100px] justify-between items-center inline-flex">
<div className="w-[469px] flex-col justify-start items-start gap-9 inline-flex">
<div className="self-stretch h-[146px] flex-col justify-start items-center gap-2.5 flex">
 */}
     
    <div className="self-stretch h-[146px] flex-col justify-start items-center gap-2.5 flex">
        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-[#1b1b1e] text-4xl font-bold font-['Montserrat'] leading-[44px]">We Know What You’d Love Next</div>
        </div>
        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-[#777777] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">Lorem ipsum dolor sit amet consectetur. Nunc duis vulputate sit. Dui gravida sed tempor pulvinar. </div>
        </div>
    </div>
    <div className="w-[127px] px-6 py-4 bg-[#1f7a8c] rounded-[400px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-center text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Get Started</div>
    </div>
</div>
<img className="w-[305.56px] h-[190.48px] bg-[#e7e8eb] rounded-[10px]" />
        
  </div>

</div>
{/* third */}
<div className="w-full flex flex-col items-center justify-center min-h-screen">
<div className="w-full flex items-end justify-center ">
  <div className='relative z-10'>
<img className="w-[113.39px] h-[169.75px] rounded-[15.12px]" src={one} />
</div>
<div className='relative -mt-[80px] -ml-[15px]'>
<img className="h-[247.47px] rounded-[15.12px]" src={two} />
</div>
<div className='relative z-10'>
<img className="w-[113.39px] h-[169.75px] rounded-[15.12px]" src={three} />
</div>

</div>
{/* forth */}
<div className="w-[946px] h-[580px]  p-10 bg-[#f9f9fa] rounded-[20px] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.10)] border border-[#c6c6c6] flex-col justify-start items-center gap-10 inline-flex ">
    <div className="self-stretch text-center text-[#1b1b1e] text-[28px] font-bold font-['Montserrat'] leading-9">Discover What Makes Us Unique</div>
    <div className="self-stretch h-[424px] bg-[#f9f9fa] flex-col justify-between items-center flex">
        <div className="self-stretch justify-between items-center inline-flex">
            <div className="grow shrink basis-0 h-[180px] justify-between items-center flex">
                <div className="w-[277px] flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-[180px] flex-col justify-center items-center gap-9 flex">
                        <img src={planner} className="w-[50px] h-[50px] relative  overflow-hidden" />
                        <div className="self-stretch h-[94px] flex-col justify-start items-center gap-2.5 flex">
                            <div className="self-stretch text-center text-[#1b1b1e] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">All Your Plans, One Place</div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-[#777777] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[277px] flex-col justify-start items-center gap-9 inline-flex">
                    <img src={design} className="w-[50px] h-[50px] relative  overflow-hidden" />
                    <div className="self-stretch h-[94px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="self-stretch text-center text-[#1b1b1e] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">Ideas To Inspire Your Journey</div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-center text-[#777777] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>
                <div className="w-[277px] flex-col justify-start items-center gap-9 inline-flex">
                    <img src={checklist} className="w-[50px] h-[50px] relative  overflow-hidden" />
                        <div className="w-[41.67px] h-[41.67px] left-[4.17px] top-[4.17px] absolute">
                        </div>
                    
                    <div className="self-stretch h-[94px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="self-stretch text-center text-[#1b1b1e] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">Don’t Forget A Thing</div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-center text-[#777777] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[608px] h-[204px] justify-between items-start inline-flex">
            <div className="w-[277px] flex-col justify-start items-center gap-9 inline-flex">
                <div className="self-stretch h-[180px] flex-col justify-start items-center gap-9 flex">
                    <img src={map} className="w-[50px] h-[50px] relative  overflow-hidden" />
                    <div className="self-stretch h-[94px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="self-stretch text-center text-[#1b1b1e] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">Stay On Track Even Off The Grid </div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-center text-[#777777] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[277px] flex-col justify-start items-center gap-9 inline-flex">
                <div className="self-stretch h-[204px] flex-col justify-start items-center gap-9 flex">
                    <img src={speech} className="w-[50px] h-[50px] relative  overflow-hidden" />
                    <div className="self-stretch h-[118px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="self-stretch text-center text-[#1b1b1e] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">Break Language Barriers On The Go</div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-center text-[#777777] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

{/* fifth */}
<section className='w-full h-[300px] px-[100px] py-[50px] bg-[#34495B] rounded-t-[40px] justify-start items-center gap-[40px] inline-flex mt-[100px] mb-[100px]'>
  <div class="max-w-[1080px] mx-auto flex gap-[40px] px-[100px] py-[50px] items-center">
    
    <div class="relative w-[400px]">
      {/* <img
        src="https://dashboard.codeparrot.ai/api/assets/Z3DJyYDQVAQjI3aC"
        alt="Robot Icon"
        class="absolute w-[50px] h-[50px] top-[15px] left-[-33px] z-10"
      /> */}

<div class="relative w-[400px] h-[220px] -mt-[140px]">
  <div class="relative w-[323.81px] h-[219.84px] ml-[38.37px]">
    <img
      src="https://dashboard.codeparrot.ai/api/assets/Z3DJyYDQVAQjI3aD"
      alt="Laptop Lid"
      class="absolute w-full h-full"
    />
    <div class="absolute top-[1.98px] left-[1.98px] w-[319.84px] h-[209.52px]">
      <img
        src="https://dashboard.codeparrot.ai/api/assets/Z3DJyYDQVAQjI3aE"
        alt="Dark Screen"
        class="w-full h-full"
      />
    </div>
    <div class="absolute top-[12.3px] left-[9.92px] w-[305.56px] h-[190.48px]">
      <img
        src="https://dashboard.codeparrot.ai/api/assets/Z3DJyYDQVAQjI3aF"
        alt="Screen"
        class="w-full h-full"
      />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#2d3748] font-['Inter'] text-[9.52px] font-bold text-center">
        Travel Mosaic
      </div>
    </div>
  </div>
  <img
    src="https://dashboard.codeparrot.ai/api/assets/Z3DJyYDQVAQjI3aG"
    alt="Bottom"
    class="absolute bottom-0 w-[400px] h-[11.91px]"
  />
  <div class="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 text-[#a0aec0] font-['Inter'] text-[5.16px] font-semibold text-center">
    Macbook Pro
  </div>
  <img
    src="https://dashboard.codeparrot.ai/api/assets/Z3DJyoDQVAQjI3aH"
    alt="Shadow"
    class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[359.13px] h-[3.97px]"
  />
</div>


      
    </div>

   
    <div class="flex-1 max-w-[469px]">
      <h1 class="text-[#dce4ec] font-['Montserrat'] text-[36px] font-bold leading-[44px] mb-[10px]">
        Ask Away, AI's Got You Covered
      </h1>
      <p class="text-[#c6c6c6] font-['Montserrat'] text-[16px] font-medium leading-[24px] tracking-[0.5px] mb-[36px]">
        Lorem ipsum dolor sit amet consectetur. Nunc duis vulputate sit. Dui gravida sed tempor pulvinar.
      </p>
      <button
        onclick="console.log('Get Started clicked')"
        class="bg-[#1f7a8c] text-white font-['Montserrat'] text-[12px] font-medium tracking-[0.5px] leading-[16px] px-[24px] py-[16px] rounded-[400px] transition-colors duration-300 ease-in-out hover:bg-[#186778]"
      >
        Get Started
      </button>
    </div>
  </div>
</section>
{/* sixth */}
<div className="w-full h-[602.03px] px-5 py-[100px] flex-col justify-start items-center gap-4 inline-flex">
    <div className="flex-col justify-start items-center gap-2 flex">
        <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#1b1b1e] text-2xl font-bold font-['Montserrat'] leading-loose">Get Inspired</div>
        </div>
        <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#777777] text-base font-medium font-['Montserrat'] leading-normal tracking-wide">Pick From Top-rated Tourist Attractions Based On User’s Experiences</div>
        </div>
        <div className="w-[1063px] py-5 justify-start items-center gap-[30px] inline-flex overflow-hidden">
            <div className="justify-start items-center gap-[30px] flex">
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="relative w-[249px]">
  
  <div className="absolute top-2 right-2 p-2 bg-white rounded-[40px] shadow-md">
    <img src={save} className="w-[26px] h-[26px] overflow-hidden" alt="Save" />
  </div>

  
  <img className="w-full h-[180px] rounded-[20px]" src={timessquare} alt="Times Square" />
</div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Times Square, New york</div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-xs font-medium font-['Montserrat']">1,234</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="relative w-[249px]">

  <div className="absolute top-2 right-2 p-2 bg-white rounded-[40px] shadow-md">
    <img src={save} className="w-[26px] h-[26px] overflow-hidden" alt="Save" />
  </div>

  
  <img className="w-full h-[180px] rounded-[20px]" src={eiffeltower} alt="Times Square" />
</div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="w-[171px] flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Eiffel Tower, Paris </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">1,234</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="relative w-[249px]">
  
  <div className="absolute top-2 right-2 p-2 bg-white rounded-[40px] shadow-md">
    <img src={save} className="w-[26px] h-[26px] overflow-hidden" alt="Save" />
  </div>

  
  <img className="w-full h-[180px] rounded-[20px]" src={bahlapalace} alt="Times Square" />
</div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Bahia Palace, Marrakesh</div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">1,234</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="relative w-[249px]">

  <div className="absolute top-2 right-2 p-2 bg-white rounded-[40px] shadow-md">
    <img src={save} className="w-[26px] h-[26px] overflow-hidden" alt="Save" />
  </div>


  <img className="w-full h-[180px] rounded-[20px]" src={lagos} alt="Times Square" />
</div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Landmark Beach, Lagos</div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">1,234</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="relative w-[249px]">

  <div className="absolute top-2 right-2 p-2 bg-white rounded-[40px] shadow-md">
    <img src={save} className="w-[26px] h-[26px] overflow-hidden" alt="Save" />
  </div>

 
  <img className="w-full h-[180px] rounded-[20px]" src={timessquare} alt="Times Square" />
</div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Times Square, New york</div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">1,234</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="p-2 bg-white rounded-[40px] justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[26px] h-[26px] relative  overflow-hidden" />
                    </div>
                    <img className="w-[249px] h-[180px] rounded-[20px]" src="https://via.placeholder.com/249x180" />
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="w-[171px] flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Eiffel Tower, Paris </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">1,234</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                    <img className="w-[249px] h-[180px] rounded-[20px]" src="https://via.placeholder.com/249x180" />
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Bahia Palace, Marrakesh</div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">1,234</div>
                            </div>
                        </div>
                        <div className="p-2 bg-white rounded-[40px] justify-start items-center gap-2.5 flex">
                            <div className="w-[26px] h-[26px] relative  overflow-hidden" />
                        </div>
                    </div>
                </div>
                <div className="w-[249px] flex-col justify-start items-start gap-4 inline-flex">
                    <img className="w-[249px] h-[180px] rounded-[20px]" src="https://via.placeholder.com/249x180" />
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                            <div className="self-stretch text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Landmark Beach, Lagos</div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-[#777777] text-xs font-normal font-['Montserrat'] leading-none tracking-wide">Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-0.5 flex">
                            <img src={heart} className="w-5 h-5 relative  overflow-hidden" />
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-[#1b1b1e] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">1,234</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-white rounded-[40px] justify-start items-center gap-2.5 flex">
                    <div className="w-[26px] h-[26px] relative  overflow-hidden" />
                </div>
            </div>
        </div>
    </div>
    <div className="justify-start items-center gap-1 inline-flex">
        <div className="justify-center items-center gap-2.5 flex">
            <button className="text-[#1b1b1e] text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">see more</button>
        </div>
        <div className="w-6 h-6 relative  overflow-hidden" />
    </div>
</div>
{/* sixth */}

{/* seventh */}
    

  
 

    
       
  {/* airplane */}
      
   <div className="w-full relative   h-[606.03px] rounded-[40px] overflow-hidden gap-10">
  <img  
   className="w-full py-[100px]" 
    src={plane} 
    //  className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2" 
  /> 
  
  <svg
  className="absolute bottom-0 left-0 w-full h-full"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
>
  <path
    d="M0,320 L0,240 C480,280 960,200 1440,240 L1440,320 Z"
    fill="#ffffff"
  />
</svg>
 </div> 
 

{/* Hear from us */}


<div className="w-full h-[358.89px] px-5  bg-white flex-col justify-start items-center gap-[30px] inline-flex">
  
    <div className="justify-center px-[105px] items-center gap-2.5 inline-flex">
        <div className="text-center text-[#1b1b1e] text-[28px] font-bold font-['Montserrat'] leading-9">Hear From Others</div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="w-[325px] p-10 bg-[#f9f9fa] rounded-[20px] border border-[#c6c6c6] flex-col justify-center items-center gap-5 inline-flex">
            <div className="self-stretch h-[124px] flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-[#474747] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Fermentum commodo quam eget sed hendrerit quis semper. Tincidunt egestas phasellus mauris tristi.</div>
                </div>
                <div className="justify-start items-center gap-1 inline-flex">
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    
                </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
                <img className="w-[50px] h-[48.89px] rounded-[44.44px]" src="https://via.placeholder.com/50x49" />
                <div className="text-center text-[#0c1e23] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Adam Davis</div>
            </div>
        </div>
        <div className="w-[325px] p-10 bg-[#f9f9fa] rounded-[20px] border border-[#c6c6c6] flex-col justify-center items-center gap-5 inline-flex">
            <div className="self-stretch h-[124px] flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-[#474747] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Fermentum commodo quam eget sed hendrerit quis semper. Tincidunt egestas phasellus mauris<br/>tristi </div>
                </div>
                <div className="justify-start items-center gap-1 inline-flex">
                <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
                <img className="w-[50px] h-[48.89px] rounded-[44.44px]" src="https://via.placeholder.com/50x49" />
                <div className="text-center text-[#0c1e23] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Adam Davis</div>
            </div>
        </div>
        <div className="w-[325px] p-10 bg-[#f9f9fa] rounded-[20px] border border-[#c6c6c6] flex-col justify-center items-center gap-5 inline-flex">
            <div className="self-stretch h-[124px] flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-[#474747] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur. Fermentum commodo quam eget sed hendrerit quis semper. Tincidunt egestas tristi phasellus mauris.</div>
                </div>
                <div className="justify-start items-center gap-1 inline-flex">
                <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                    <img src={star} className="w-5 h-5 relative  overflow-hidden" />
                </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
                <img className="w-[50px] h-[48.89px] rounded-[44.44px]" src="https://via.placeholder.com/50x49" />
                <div className="text-center text-[#0c1e23] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Adam Davis</div>
            </div>
        </div>
    </div>
</div>

{/* bottom */}

        
        <div className="w-full h-[424.25px] px-[100px] py-[150px] bg-[#bfdbf7] flex-col justify-start items-center gap-[38px] inline-flex relative overflow-hidden">
  
  <svg
    className="absolute top-[-75px] left-0 w-full h-[150px]"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1280 150"
  >
    <path
      d="M0,150 C298.722,70 640.817,70 1280,150 L1280,0 L0,0 Z"
      fill="#ffffff"
    />
  </svg>

 
  <div className="w-[722px] justify-center items-center gap-2.5 inline-flex z-10">
    <div className="grow shrink basis-0 text-center text-[#5b430f] text-[32px] font-bold font-['Montserrat'] leading-10">
      Join Thousands of Travellers, Start Your Journey Today
    </div>
  </div>

  <div className="justify-start items-center gap-[18px] inline-flex z-10">
    <div className="h-12 px-6 py-4 bg-[#1f7a8c] rounded-[400px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2.5 flex">
      <div className="grow shrink basis-0 text-center text-white text-xs font-medium font-['Montserrat'] leading-none tracking-wide">
        Start Planning
      </div>
    </div>
  </div>
</div>



 

    </>
  )
}

export default Landing
