import React from 'react'
import Header from './Header'
import { BsUnlockFill } from 'react-icons/bs'

const SecondHero = () => {
  return (
     <div className="md:min-h-[900px]relative overflow-hidden main_section_bg z-50 text-center w-full flex flex-col justify-center items-center  gap-[20px] md:gap-[50px] py-[30px] md:pb-[100px]">
      <Header />
      <h1 className="inter font-bold text-2xl md:text-[50px] px-[20px] md:px-[100px] md:leading-[75px]">
        Missed AAPL & MSFT
        <span className="text-[#008000] ml-3">
          <span className="underline font-extrabold">Breakouts?</span>
        </span>
      </h1>
      <img src="/images/graph.svg" alt="" className="md:my-[-40px]" />
      <h2 className="inter font-bold text-2xl md:text-[50px] px-[20px] md:px-[100px] md:leading-[75px] flex flex-col md:flex-row gap-3 md:gap-[21px]">
        <span>Don’t Miss</span>
        <span className="text-[#008000]">
          <span className="underline font-bold bg-[#E0FFE0] italic py-[6px] px-[7px]">The Next Ones</span>
        </span>
      </h2>
      <div className="flex justify-center items-center w-full flex-col md:flex-row max-w-[1440px] mx-auto  px-[20px] md:px-[100px]">
        <div className="w-full md:w-[585px] flex flex-col items-start gap-4 md:gap-[28px]">
          <h2 className="text-base md:text-xl font-medium inter text-[#000000] text-left">
            Every Day We Tell Members 3 Stocks That Just Broke Out.
          </h2>
          <h2 className="text-base md:text-xl font-semibold inter text-[#000000]">
            FREE. No Commitment. Just Value
          </h2>
          <p className="text-base md:text-xl font-normal inter text-[#000000] capitalize">
            Just tell us Your email... 👇
          </p>
          <div className="flex flex-col justify-center md:flex-row gap-3 md:gap-7 items-start w-full my-3">
            <p className="inter font-medium text-base text-[#000000] sm:mt-3">
              Email
            </p>
            <div className="flex flex-col gap-3 md:gap-7 w-full md:w-auto">
              <input
                type="text"
                name=""
                id=""
                placeholder="email@example.com"
                className="w-full md:w-[365px] h-[48px] rounded-[10px] pl-4 outline-none border border-[#E3E3E8] input_box_shadow"
              />
              <button className="flex justify-center items-center gap-[14px] w-full md:w-[364px] h-[48px] rounded-[10px] text-white bg-[#008000] button_shadow">
                <BsUnlockFill />
                Get 3 Free Breakouts
              </button>
            </div>
          </div>
          <h2 className="text-base md:text-xl font-semibold inter text-[#000000]">
            Inside You’ll Get:
          </h2>
          <div className="flex flex-col gap-[10px] ml-[20px] text-left">
            <p className="flex items-center gap-[13px] justify-start ">
              <img src="/images/tick.png" alt="" />
              <span className="text-sm sm:text-lg text-[#343434] capitalize ">
               3 Buyable breakouts Every Day
              </span>
            </p>
            <p className="flex items-center gap-[13px] justify-start">
              <img src="/images/tick.png" alt="" />
              <span className="text-sm sm:text-lg text-[#343434] capitalize ">
                Save hours —
                <span className="underline">
                  we’ve already done the research for you
                </span>
              </span>
            </p>
            <p className="flex items-center gap-[13px] justify-start">
              <img src="/images/tick.png" alt="" />
              <span className="text-sm sm:text-lg text-[#343434] capitalize ">
                <span className="underline">Get it FREE</span> — no catch, just
                Actionable Stocks To Buy
              </span>
            </p>
          </div>
          <p className="text-xs text-[#000000] text-left opacity-50">
            By entering your email, you are joining our free community. We
            respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SecondHero
