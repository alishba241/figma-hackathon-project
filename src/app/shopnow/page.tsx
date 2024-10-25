import React from 'react'
import Image from 'next/image';

import watch from '../../../public/watch earpod copy.png'
import ipad from '../../../public/ipad pro copy.png'
import iphone from '../../../public/iphne.png'
import macbook from '../../../public/Macbook 1 copy.png'
import { FaCircle } from 'react-icons/fa';


function ShopNow() {
    return (
      <div>
            <div className='flex justify-center items-center mt-[56px]'>
                <div  className='hidden md:block'>
          <div className='h-[550px] w-[340px] bg-white flex flex-col items-center'>
              <Image
              src={watch}
                  alt={'product'}
                  width={300}
              />
              <div className='px-[30px]'>
                  <h1 className='font-sans text-[32px] text-[#000000] '>Popular Products</h1>
                  <p className='text-[#909090] leading-relaxed text-sm font-medium pt-[20px] pb-[20px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                   <button className='text-black outline outline-1 outline-black text-lg font-medium text-center px-[52px] py-[13px] rounded-md'>Shop Now</button>

              </div>

                </div>
                </div>
           <div className='md:h-[550px] md:w-[340px] w-full h-[650px] bg-[#F9F9F9] flex flex-col items-center md:justify-start justify-center'>
              <Image
              src={ipad}
                  alt={'product'}
                  width={300}
              />
              <div className='px-[30px] text-center md:text-left'>
                  <h1 className='font-sans md:text-[32px] text-[45px] font-[400] text-[#000000] '>Ipad Pro</h1>
                  <p className='text-[#909090] leading-relaxed text-sm font-medium pt-[8px] md:pt-[20px] pb-[20px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                   <button className='text-black outline outline-1 outline-black text-base md:text-lg font-medium text-center px-[52px] py-[13px] rounded-md'>Shop Now</button>
                        <div className='md:hidden flex gap-2 justify-center items-center pt-10'>
                            <FaCircle size={7} />
                            <FaCircle size={7} className='text-black text-opacity-25'/>
                            <FaCircle size={7}  className='text-black text-opacity-25'/>
                            <FaCircle size={7}   className='text-black text-opacity-25'/>
                   </div>
              </div>

                </div>
                <div className='hidden md:block'>
           <div className=' h-[550px] w-[340px] bg-[#EAEAEA] flex flex-col items-center'>
              <Image
              src={iphone}
                  alt={'product'}
                  width={300}
              />
              <div className='px-[30px]'>
                  <h1 className='font-sans text-[32px] text-[#000000] '>Samsung Galaxy</h1>
                  <p className='text-[#909090] leading-relaxed text-sm font-medium pt-[20px] pb-[20px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                   <button className='text-black outline outline-1 outline-black text-lg font-medium text-center px-[52px] py-[13px] rounded-md'>Shop Now</button>

              </div>

                </div>
                </div>
                <div className='hidden md:block' >
           <div className='h-[550px] w-[340px] bg-[#2C2C2C] flex flex-col items-center'>
              <Image
              src={macbook}
                  alt={'product'}
                  width={300}
              />
              <div className='px-[30px]'>
                  <h1 className='font-sans text-[32px] text-[#FFFFFF] '>Mackbook Pro</h1>
                  <p className='text-[#909090] leading-relaxed text-sm font-medium pt-[20px] pb-[20px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                   <button className='text-[#FFFFFF] outline outline-1 outline-[#FFFFFF]text-lg font-medium text-center px-[52px] py-[13px] rounded-md'>Shop Now</button>

              </div>

                </div>
                </div>
            </div>
            </div>
  )
}

export default ShopNow
