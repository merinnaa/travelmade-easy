import React from 'react'
import close from '../asset/images/close.png'
import CloseButton from './CloseButton'
const Signup = () => {

  const handleClose = () => {
console.log('close button')
  }

  return (
    <>
      <div className=" w-full h-[672px] flex-col justify-start items-start inline-flex">
    <div className="h-[672px] px-[50px] py-[30px] bg-[#f9f9fa] rounded-[40px] border-2 border-[#c6c6c6] flex-col justify-start items-center gap-4 flex">
        <div className="w-[37px] justify-start items-center gap-2.5 inline-flex">
        <CloseButton />
        </div>
        <div className="self-stretch h-[76px] flex-col justify-start items-center gap-2 flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
                <span className="text-center text-[#1b1b1e] text-[22px] font-bold font-['Montserrat'] leading-7">Sign Up</span>
            </div>
            <div className="w-[411px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-[#777777] text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">Your Journey Begins Here. Sign Up And Explore The World Your Way</div>
            </div>
        </div>
        <div className="self-stretch h-[520px] flex-col justify-start items-end gap-4 flex">
            <div className="self-stretch h-[314px] flex-col justify-start items-center gap-3 flex">
                <div className="self-stretch h-[254px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="self-stretch h-[254px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-[#1b1b1e] text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">Enter Email Address</div>
                            </div>
                            <div className="self-stretch h-[52px] px-6 py-3 bg-white rounded-[40px] border border-[#c6c6c6] justify-start items-center gap-2.5 inline-flex">
                                <div className="text-center text-[#c6c6c6] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">Your email</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-[#1b1b1e] text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">Create Password</div>
                            </div>
                            <div className="self-stretch h-[52px] px-6 py-3 bg-white rounded-[40px] border border-[#c6c6c6] justify-between items-center inline-flex">
                                <div className="text-center text-[#c6c6c6] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">Your password</div>
                                <div className="w-6 h-6 relative  overflow-hidden" />
                            </div>
                        </div>
                        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-[#1b1b1e] text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">Confirm Password</div>
                            </div>
                            <div className="self-stretch h-[52px] px-6 py-3 bg-white rounded-[40px] border border-[#c6c6c6] justify-between items-center inline-flex">
                                <div className="text-center text-[#c6c6c6] text-[11px] font-medium font-['Montserrat'] leading-none tracking-wide">Confirm your password</div>
                                <div className="w-6 h-6 relative  overflow-hidden" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch px-6 py-4 bg-[#e2e2e2] rounded-[400px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-[#474747] text-xs font-medium font-['Montserrat'] leading-none tracking-wide">Verify Email</div>
                </div>
            </div>
            <div className="self-stretch h-[190px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[180px] h-[0px] border border-[#777777]"></div>
                    <div className="text-center text-[#474747] text-xs font-bold font-['Montserrat'] leading-none tracking-wide">OR</div>
                    <div className="w-[180px] h-[0px] border border-[#777777]"></div>
                </div>
                <div className="self-stretch h-[158px] flex-col justify-start items-center gap-2.5 flex">
                    <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch px-6 py-[18px] bg-[#edeef0] rounded-[40px] border-2 border-[#076879] justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-center text-black text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">Continue with Google</div>
                            </div>
                            <div className="w-6 h-6 relative  overflow-hidden" />
                        </div>
                        <div className="self-stretch px-6 py-[18px] bg-[#edeef0] rounded-[40px] border-2 border-[#076879] justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-center items-center gap-2.5 flex">
                                <div className="text-center text-black text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">Continue with Apple</div>
                            </div>
                            <div className="w-6 h-6 relative  overflow-hidden" />
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="justify-center items-center gap-2.5 flex">
                            <div className="text-center text-[#1b1b1e] text-sm font-medium font-['Montserrat'] leading-tight tracking-tight">Already have an account?</div>
                        </div>
                        <div className="justify-center items-center gap-2.5 flex">
                            <div className="text-center text-[#1b1b1e] text-sm font-bold font-['Montserrat'] leading-tight tracking-tight">Sign In</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Signup
