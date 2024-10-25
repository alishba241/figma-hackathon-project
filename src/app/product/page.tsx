'use client'

import React, { useState } from 'react'

import iphone from '../../../public/Iphone 14 pro 1.png'
import camera from '../../../public/cameraproduct.png'
import watch from '../../../public/watch.png'
import headphone from '../../../public/headphoneproduct.png'
import didgitalWatch from '../../../public/watchdigital.png'
import tablet from '../../../public/tab.png'
import earpod from '../../../public/earpods.png'
import ipad from '../../../public/ipad.png'
import like from '../../../public/Like.png'
import redLike from '../../../public/redLike.png'
import Image from 'next/image'


interface productType {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  title: string
  price:number
}

const productList: productType[] = [
  { id: 1, image: iphone, title: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: 900 },
  { id: 2, image: camera, title: 'Blackmagic Pocket Cinema Camera 6k', price: 2535 },
  { id: 3, image: watch, title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399 },
  { id: 4, image: headphone, title: 'AirPods Max Silver Starlight Aluminium ', price: 549 },
  { id: 5, image: didgitalWatch, title: ' Samsung Galaxy Watch6 Classic 47mm Black', price: 369 },
  { id: 6, image: tablet, title: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black', price: 1799 },
  { id: 7, image: earpod, title: 'Galaxy Buds FE Graphite', price: 99.99 },
  { id: 8, image: ipad, title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021', price: 398 },
]


function Product() {

  const [isLiked, SetisLiked] = useState<{[key:number]:boolean}>({})
  const handleLikes = (id:number) => {
    SetisLiked((prestate) => ({
      ...prestate,
      [id]: !prestate[id]
    }))
  }


  return (
    <div >
      <div className='flex md:gap-[25px] gap-[20px] md:ml-[150px] pt-[56px] pb-[32px] cursor-pointer justify-center items-center md:justify-start'>
        <h1 className='text-black font-medium md:text-lg text-sm border-b-2 border-b-black border-spacing-4'>New Arrival</h1>
      <h1 className='text-[#8B8B8B] text-sm md:text-lg font-medium '>Bestseller</h1>
      <h1 className='text-[#8B8B8B] text-sm md:text-lg font-medium'>Featured Products</h1>
      </div>
      
      <div className=' flex justify-center items-center px-4'>
      <div  className='grid md:grid-cols-4 grid-cols-2 md:gap-[20px] gap-4'>
        {productList.map((products) => (
          <div key={products.id} className='md:h-[380px] md:w-[250px] h-full w-[163.5] bg-[#F6F6F6]  flex flex-col items-center justify-center rounded-lg '>
            {/* like icon for large screen*/}

            <div onClick={() =>handleLikes(products.id)} className='hidden md:block relative top-[30px] left-[90px] cursor-pointer'>
              
              <Image
                src={isLiked[products.id]? redLike : like}
                alt=''
                width={28} />
        
            </div>
             {/* like icon for small screen*/}
             <div onClick={() =>handleLikes(products.id)} className=' md:hidden relative left-[30%] top-[24px]  cursor-pointer'>
              
              <Image
                src={isLiked[products.id]? redLike : like}
                alt=''
                width={24} />
        
            </div>

            {/* image for large screen */}
            
           <div className='hidden md:block'>
                       <Image 
                          src={products.image}
                          alt='category'
              width={120}
              className='pt-[40px]'
            />
            </div>

             {/* image for small screen */}
             <div className='md:hidden'>
                       <Image 
                          src={products.image}
                          alt='category'
              width={88}
              className='pt-[30px]'
            />
           </div>
                      <div className='font-sans flex-grow' >
              <p className='pt-[18px] text-sm font-medium text-center px-[15px] '>{products.title}</p>
              <p className='pt-[10px] text-xl font-bold text-center mb-[10px] '>${ products.price}</p>
            </div>
            <div className='mt-auto mb-[20px]'>
              <button className='text-white bg-black text-sm text-center px-[30px] py-[10px] md:px-[58px] md:py-[12px] rounded-md hover:bg-opacity-80 hover:duration-300'>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      </div>
       </div>
  )
}
     


export default Product
