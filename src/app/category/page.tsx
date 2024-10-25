import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { categoryImage } from './categorydata'
import Image from 'next/image'

function Category() {
  return (
    <div>
          <div  className='w-full md:h-[300px] h-[600px] bg-[#FAFAFA] '>
            <div className='flex justify-between '>
                <h1 className='md:ml-[10%] ml-4 mt-[60px] md:mt-[70px] md:text-2xl  text-[22px] font-semibold'>Browse By Category</h1>
              <div className='flex md:mr-[10%] mr-3 mt-[60px] md:mt-[70px] gap-1 md:gap-[8px] '>
                   <FiChevronLeft className='text-4xl  text-black' style={{strokeWidth: '0.9'}} />
                  <FiChevronRight className='text-4xl text-black' style={{ strokeWidth: '0.9' }} />
                  
              </div >
            </div>
              <div className='flex justify-center items-center'>
              <div className='md:flex grid  md:grid-cols-1 grid-cols-2 md:gap-[40px] gap-[20px] justify-center md:px-0 items-center mt-[40px] md:mt-[30px] px-4'>
              {categoryImage.map((category) => (
                  <div key={category.id} className='h-[110px] flex flex-col items-center justify-center md:w-[150px] w-[140px] rounded-xl bg-[#EDEDED]'>
                      <Image 
                          src={category.image}
                          alt='category'
                          width={40}
                      />
                      <div >
                          <p  className='pt-[10px] font-medium '>{ category.categoryName}</p>
                      </div>
                  </div>
              ))}
          </div>
          </div>
          </div >
         
    </div>
  )
}

export default Category
