import React from 'react'

const Home = () => {
  return (
    <div className="flex text-center justify-center items-center flex-col pt-[90px]">
      <div className=" font-bold txt-light mt-[10rem] mobile:text-[40px] lg:text-[64px]">
        Speak out your <span className="txt-main">&nbsp;Feelings</span>
      </div>
      <div className="txt-ternary-light lg:text-[20px] mt-5 md:flex-row flex">
        <div>Connect with a therapist to get your&nbsp;</div><div className="type">problems solved...</div>
      </div>
      <button className="txt-dark back-main px-[80px] py-[15px] mt-10 rounded-md text-[25px] mb-40 hover:bg-blue-400 active:bg-blue-500 transition-all" >Get Help</button>
    </div>
  )
}

export default Home