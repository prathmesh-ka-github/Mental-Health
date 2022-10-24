import React from 'react'

const Home = () => {
  return (
    <div className="flex text-center justify-center items-center flex-col pt-[90px]">
      
      <div className='z-10 mb-80 mt-60'>
        <div className=" font-bold txt-light mobile:text-[40px] lg:text-[64px]">
          Speak out your<span className="txt-main">&nbsp;Feelings</span>
        </div>
        <div className="txt-ternary-light lg:text-[20px] mt-5 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
          <div>Connect to a therapist to get your&nbsp;</div><div className="type mobile:w-[179px] w-auto">problems solved...</div>
        </div>
        <button className="text-white back-main px-[80px] py-[15px] mt-10  rounded-md text-[25px]  hover:bg-blue-400 active:bg-blue-500 transition-all" >Get Help</button>
      </div>
      <div>
        <div className=" z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[64px] mobile:flex-col flex lg:flex-row">
          Your confidentiality <span className="txt-light ">&nbsp;is our priority</span>
        </div>
        <button className="text-white back-main px-[80px] py-[15px] mt-10 mb-80 rounded-md text-[25px]  hover:bg-blue-400 active:bg-blue-500 transition-all" >View more</button>
      </div>
      <div>
        <div className="justify-center font-bold txt-light mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col lg:flex-row">
          How does it <span className="txt-main">&nbsp;Work</span>
        </div>
        <div className="z-10 flex lg:flex-row mobile:flex-col mb-60">
          <div className='flex flex-col items-center px-10 mt-20'>
            <img className='w-[157px] mb-9' src="./assets/connection-blue.png" alt="" />
            <div className='txt-light lg:text-[2rem] mobile:text-[1.2rem]'>Connect Therapist which is <br /> registerd on our website</div>
          </div>
          <div className='flex flex-col items-center px-10 mt-20'>
            <img className='w-[157px] mb-9' src="./assets/male-blue.png" alt="" />
            <div className='txt-light lg:text-[2rem] mobile:text-[1.2rem]'>Have a converstion with <br /> them on chat</div>
          </div>
          <div className='flex flex-col items-center px-10 mt-20'>
            <img className='w-[157px] mb-9' src="./assets/conversation-blue.png" alt="" />
            <div className='txt-light lg:text-[2rem] mobile:text-[1.2rem]'>If you like their advice have <br /> a video conversation</div>
          </div>
        </div>
      </div>
      <div className="z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col lg:flex-row">
        Frequently Asked<span className="txt-light">&nbsp;Questions</span>
      </div>
    </div>
  )
}

export default Home