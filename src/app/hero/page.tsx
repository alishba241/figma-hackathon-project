import Image from 'next/image'
import React from 'react'
// import Banner from '../../../public/Banner.png'
import iphone from '../../../public/Iphone Image.png'
import playstation from '../../../public/PlayStation.png'
import macbook from '../../../public/MacBook Pro 14.png'
import headphone from '../../../public/headphn.png'
import eyecam from '../../../public/eyecam.png'
import iphonesmall from '../../../public/Iphone Image (1).png'
import smallcam from '../../../public/camera small.png'
import smallhead from '../../../public/headphone small.png'
import smallmacbook from '../../../public/MacBook Pro 14 (1) small.png'
import smallplaystation from '../../../public/PlayStation (1) small.png'


function Hero() {
  return (
      <div>
          <div className='w-full h-auto bg-[#211C24] flex md:flex-row-reverse flex-col-reverse md:justify-between justify-center items-center  text-center'>
          <div className='h-auto md:mt-0 mt-20 md:ml-[140px] md:order-1 order-2 text-center  md:text-left'>
                  <p className='text-2xl font-semibold text-[#FFFFFF] text-opacity-40'>Pro.Beyond.</p>
                  <h1 className='md:text-8xl text-6xl text-[#FFFFFF] font-sans font-thin pt-[10px] '>IPhone 14 <span className='font-semibold md:inline block'>Pro</span></h1>
                  <p className=' text-[#909090] md:text-lg text-md font-medium md:px-0 px-[20px]  py-[20px]'>Created to change everything for the better. For everyone</p>
             <button className='text-[#FFFFFF] outline md:mt-0 mt-2 hover:bg-opacity-5 hover:bg-white duration-200 ease-in outline-1 outline-[#FFFFFF] text-lg  text-center px-[52px] py-[13px] rounded-md'>Shop Now</button>
        </div>
        {/* larger Screen Image */}
        
          <div  className='md:block hidden md:h-auto md:w-[450px] w-[85%] h-auto md:mr-[150px] '>
                  <Image src={ iphone} alt='' />
        </div>

         {/* smaller Screen Image */}
        <div  className='md:hidden w-[85%] h-auto mt-10'>
                  <Image src={ iphonesmall} alt='' className='w-full h-auto object-contain'/>
              </div>
              </div>
                
      {/* BANNER 2 for large screnns*/}
<div className='hidden md:block'>
         <div className='w-full flex'>
  <div className='flex flex-col'>
    {/* playstation */}
    <div className='bg-white w-[675px]  h-[328px] flex items-center justify-start '>
            <Image src={playstation} alt='' />
            <div className='relative right-[40px]'>
              <h2 className='text-black font-medium text-5xl'>Playstation 5</h2>
              <p className='text-[#909090] text-sm font-medium pr-[0px] pt-[15px]'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
    </div>
    <div className='flex '>
      {/* headphone */}
      <div className='bg-[#EDEDED] h-[272px] w-[337.5px] flex items-center justify-start '>
              <Image src={headphone} alt='' />
               <div className='px-[30px] relative left-2'>
              <h2 className='text-black font-[300] text-3xl'>Apple <br /> AirPods <br /> <span className='font-medium'>Max</span></h2>
              <p className='text-[#909090] text-sm font-medium  pt-[15px]'>Computational audio. Listen, its powerful</p>
            </div>
      </div>

     {/* camera */}
      <div className='bg-[#353535] w-[337.5px] h-[272px] flex items-center justify-start '>
              <Image src={eyecam} alt='' />
              <div className='px-[30px] '>
              <h2 className='text-white font-[300] text-3xl'>Apple <br />Vision <span className='font-medium'>Pro</span></h2>
              <p className='text-[#909090] text-sm font-medium  pt-[15px]'>An immersive way to experience entertainment</p>
            </div>
      </div>
    </div>
  </div>
            {/* macbook */}
        <div className='bg-[#EDEDED] w-full h-[600px] flex items-center justify-end '>
          <div className='px-[20px] relative left-[30px]'>
              <h2 className='text-black font-[100] text-6xl leading-[50px]'>Macbook <br /><span className='font-medium text-6xl'>Air</span></h2>
              <p className='text-[#909090] text-sm font-medium  pt-[25px]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                       <button className='text-black outline hover:bg-opacity-35 hover:bg-gray-300 duration-200 ease-in outline-1 outline-black text-md font-bold mt-[20px]  text-center px-[48px] py-[13px] rounded-md'>Shop Now</button>
          </div>
          <Image src={macbook} alt='' />
           
  </div>
</div>
      </div>
            {/* BANNER 2 for small screnns*/}

      <div className='md:hidden'>
         <div className='w-full flex flex-wrap'>
          <div className='flex flex-col flex-wrap'>
             <div className='flex flex-col flex-wrap'>
      {/* headphone */}
      <div className='bg-[#EDEDED] h-[376px] w-full flex flex-col flex-wrap items-center justify-center '>
              <Image src={smallhead} alt='' width={150}/>
               <div className='px-[20px] text-center'>
              <h2 className='text-black font-[300] text-3xl pt-4'>Apple AirPods <span className='font-medium'>Max</span></h2>
              <p className='text-[#909090] text-md font-medium  pt-[8px]'>Computational audio. Listen, its powerful</p>
            </div>
      </div>

     {/* camera */}
      <div className='bg-[#353535] w-full h-[392.44px] flex flex-col items-center justify-center '>
              <Image src={smallcam} alt='' width={280}/>
              <div className='px-[30px] text-center'>
              <h2 className='text-white font-[300] text-3xl  pt-4'>Apple Vision <span className='font-medium'>Pro</span></h2>
              <p className='text-[#909090] text-md font-medium  pt-[8px]'>An immersive way to experience entertainment</p>
            </div>
      </div>
    </div>
    {/* playstation */}
    <div className='bg-white w-full  h-[424px] flex flex-col items-center justify-center '>
            <Image src={smallplaystation} alt='' />
            <div className='relative px-4 text-center'>
              <h2 className='text-black font-medium text-4xl text-center  pt-6'><span className='font-[400]'>Playstation</span> 5</h2>
              <p className='text-[#909090] text-md font-medium pt-[10px]'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
    </div>
 
  
            {/* macbook */}
            <div className='bg-[#EDEDED] w-full h-[504px] flex flex-col items-center justify-cemter '>
              <Image src={smallmacbook} alt='' className='mt-10' />
          <div className='px-4 text-center'>
              <h2 className='text-black font-medium text-4xl  pt-4'>Macbook <span className='font-[300] text-4xl'>Air</span></h2>
              <p className='text-[#909090] text-md font-medium  pt-[20px]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                       <button className='text-black outline hover:bg-opacity-35 hover:bg-gray-300 duration-200 ease-in outline-1 outline-black text-md font-semibold mt-[20px]  text-center px-[100px] py-[13px] rounded-md'>Shop Now</button>
          </div>
          </div>  
  </div>
</div>
</div>
      </div>
      
  )
}

export default Hero
