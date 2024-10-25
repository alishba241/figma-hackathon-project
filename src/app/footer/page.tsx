import Image from 'next/image'
import React from 'react'
import logo from '../../../public/Logowhite.png'
import {  FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaFacebookF} from 'react-icons/fa6'

function Footer() {
  return (
    <div>
<footer className='w-full md:h-[504px] h-[814.87px] md:bg-black bg-[#181313] md:grid md:grid-cols-3 grid-cols-1 flex flex-col md:justify-start md:items-start justify-center items-center md:text-left text-center px-[32px] pt-[48px] text-white  md:py-[104px] md:px-[160px]'>
              <div  className=''>
                  <Image
                      src={logo}
                     alt='logo'
                     className='mx-auto md:mx-0' 
                  />
                  <p className='pt-[25px] text-xs md:text-sm text-[#CFCFCF] leading-5'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
              </div>
              <div className='md:relative md:left-[120px] md:pt-0 pt-[32px]'>
                  <h1 className='font-semibold text-base'>Services</h1>
                  <ul className='text-[#CFCFCF] md:leading-9 leading-9 text-xs md:text-sm mt-2'>
                      <li>Bonus program</li>
                      <li>Gift cards</li>
                      <li>Credit and payment</li>
                      <li>Service contracts</li>
                      <li>Non-cash account</li>
                      <li>Payment</li>
                  </ul>
              </div>
              <div className='md:relative md:left-[120px] md:pt-0 pt-[32px]'>
                  <h1 className='font-semibold text-base'>Assistance to the buyer</h1>
                  <ul className='text-[#CFCFCF] md:leading-9 leading-9 text-xs md:text-sm mt-2'>
                      <li>Find an order</li>
                      <li>Terms of delivery</li>
                      <li>Exchange and return of goods</li>
                      <li>Guarantee</li>
                      <li>Frequently asked questions</li>
                      <li>Terms of use of the site</li>
                  </ul>
              </div>
              <div className='flex gap-[25px] md:gap-[35px] mt-[30px]'>
                  <FaTwitter />
                  <FaFacebookF/>
                  <FaTiktok />
                  <FaInstagram/>
              </div>
    </footer>
    </div>
  )
}

export default Footer
