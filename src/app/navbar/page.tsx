import React from 'react'
// import { FaSearch } from 'react-icons/fa'
import { FiHeart,  FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import logo from '../../../public/Logoblack.png'
import burger from '../../../public/Burger.png'
import Image from 'next/image'

function Navbar() {
  return (
      <div className=' w-[100%] h-[90px] bg-white flex lg:justify-evenly items-center font-sans'>
          {/* logo */}
          <div className='font-bold text-[28px] md:ml-[90px] ml-[16px] p-0'>
        <Image
          src={logo}
          alt='logo'
        /> 
          </div>
          <div className='hidden lg:flex items-center h-[56px] ml-[-20px] font-medium w-[372px] bg-[#F5F5F5] rounded-md text-opacity-80  text-gray-400 text-md'>
              
        <FiSearch className=' text-xl h-[60%] w-[22px] ml-[18px] mr-[10px] text-[#b4b4b4]' />
              <p className=' text-[#656565] text-opacity-50'>Search</p>
      </div>
      <div   className='lg:hidden relative left-[60%]'>
         <Image
        
          src={burger}
          alt=''
          
        />
      </div>
      
      {/* nav-links */}
          <div className='hidden lg:flex list-none gap-[50px] font-semibold ml-[-15px] cursor-pointer text-opacity-80  text-gray-400 text-[17px]'>
              <li className='text-black'>Home</li >
              <li className='hover:text-black hover:duration-500 hover:ease-in'>About</li>
              <li className='hover:text-black hover:duration-500 hover:ease-in'>Contact Us</li>
              <li className='hover:text-black hover:duration-500 hover:ease-in'>Blog</li>
      </div>
      <div className='hidden lg:flex gap-[35px] text-[24px] text-opacity-70 text-black'>
        <FiHeart />
        <FiShoppingCart />
        <FiUser/>
      </div>
      
    </div>
  )
}

export default Navbar
