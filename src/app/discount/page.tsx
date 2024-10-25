'use client'

import React, { useState } from "react";
import watch from "../../../public/watch.png";
import headphone from "../../../public/headphoneproduct.png";
import iphone1 from "../../../public/Iphone 14 pro disc 1 (1).png";
import iphone2 from "../../../public/Iphone 14 pro disc 2.png";
import banner2 from "../../../public/Banner 2 (1).png";
import like from "../../../public/Like.png";
import redLike from "../../../public/redLike.png";
import Image from "next/image";
import smallbanner from '../../../public/Banner 2small.png'

interface DiscountType {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  title: string;
  price: number;
}

const DiscountList: DiscountType[] = [
  {
    id: 1,
    image: iphone2,
    title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: 1499,
  },
  {
    id: 2,
    image: headphone,
    title: "AirPods Max Silver Starlight Aluminium ",
    price: 549,
  },
  {
    id: 3,
    image: watch,
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
    price: 399,
  },
  {
    id: 4,
    image: iphone1,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
  },
];

function Discount() {
  const [isLiked, SetisLiked] = useState<{ [key: number]: boolean }>({});
  const handleLikes = (id: number) => {
    SetisLiked((prestate) => ({
      ...prestate,
      [id]: !prestate[id],
    }));
  };

  return (
    <div className="mt-[30px]">
      <div className="flex gap-[25px]  ml-[5%] md:ml-[150px] pt-[56px] pb-[32px] cursor-pointer">
        <h1 className="font-medium text-xl md:text-2xl text-black">
          Discounts up to -50%
        </h1>
      </div>

      <div className=" flex justify-center items-center px-4 ">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[20px] gap-4">
          {DiscountList.map((disc) => (
            <div
              key={disc.id}
              className="md:h-[380px] md:w-[250px] h-full w-[163.5] bg-[#F6F6F6]  flex flex-col items-center justify-center rounded-lg "
            >

                 {/* like icon for large screen*/}
              <div
                onClick={() => handleLikes(disc.id)}
                className="relative top-[30px] left-[90px] cursor-pointer hidden md:block"
              >
                <Image
                  src={isLiked[disc.id] ? redLike : like}
                  alt=""
                  width={28}
                />
              </div>
                 {/* like icon for small screen*/}
              <div
                onClick={() => handleLikes(disc.id)}
                className="relative left-[30%] top-[24px]  cursor-pointer md:hidden "
              >
             
                <Image
                  src={isLiked[disc.id] ? redLike : like}
                  alt=""
                  width={24}
                />
              </div>
                
              {/* image for large screen */}

              <div className='hidden md:block'>
                <Image
                src={disc.image}
                alt="category"
                width={120}
                className="pt-[40px]"
              />
              </div>

               {/* image for small screen */}
               <div className='md:hidden'>
                <Image
                src={disc.image}
                alt="category"
                width={88}
                className="pt-[30px]"
              />
              </div>
              

              <div className="font-sans flex-grow">
                <p className="pt-[18px] text-sm font-medium text-center px-[15px] ">
                  {disc.title}
                </p>
                <p className="pt-[10px] text-xl font-bold text-center mb-[10px]">
                  ${disc.price}
                </p>
              </div>
              <div className="mt-auto mb-[20px]">
                <button className="text-white  bg-black text-sm text-center px-[30px] py-[10px] md:px-[58px] md:py-[12px] rounded-md hover:bg-opacity-80 hover:duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative w-full mt-[60px] md:mt-[80px] ">
        <Image src={banner2} alt="" className="hidden md:block w-full h-full object-cover" />
        <Image src={smallbanner} alt="" className="md:hidden  w-full h-full  object-cover"/>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white  text-center">
          <h2 className="md:text-7xl text-5xl font-[100] text-white  leading-tight md:leading-none">
            Big Summer
             <br className="md:hidden"/>
             <span className="font-semibold"> Sale</span></h2>
        <p className="text-[#787878] md:text-lg text-base md:pt-3 pt-5 px-5 md:px-0 text-center">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
         <button className='text-[#FFFF] hover:bg-opacity-5 hover:bg-white duration-200 ease-in outline mt-10 md:mt-12 outline-1 outline-[#FFFFFF] text-base md:text-lg font-medium text-center px-[52px] py-[13px] rounded-md'>Shop Now</button>

        </div>
      </div>
    </div>
  );
}

export default Discount;
