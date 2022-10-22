import React from 'react'

const NavBar = () => {
  return (
    <div className="lg:text-[26px]  w-full h-[90px] flex text-5xl items-center justify-around font-normal shadow-md fixed z-4 bg-white">
      <logo className="cursor-pointer mobile:text-[20px] lg:text-[26px] "><img alt='logo img' className="mobile:h-[20px]]" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-mental-health-self-development-inipagistudio-mixed-inipagistudio.png"/></logo>
      <ul className="justify-around items-center sm:flex hidden">
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">Home</li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">Help</li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">About Us</li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">Contact Us</li>
        <li className="list-none mx-5 cursor-pointer p-2 transition-all"><img alt='sun light mode' src="https://img.icons8.com/ios/50/000000/sun--v1.png"/></li>
      </ul>
      <div className="justify-end items-center sm:hidden">
      <img alt='hambuger menu' src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"/>
      </div>
    </div>
  )
}

export default NavBar