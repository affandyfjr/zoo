import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (


    <div className='bg-gradient-to-b from-black bg-[#12380F] h-auto w-full pb-10'>
      <div className='grid grid-cols-2'>
        <div className=''>
          <div>
            <img src="src/assets/logo_footer.png" alt="logo" className='h-52 w-52 ml-9' />
          </div>

          <div className='text-white ml-14 text-[25px] -mt-5'>RRZOO INDONESIA JAYA</div>
          <div className='text-white ml-14 text-[24px] mt-10'>Kenangan - Malang sejahtera jalan veteran IV Merdeka  Malang selatan Jatim 2990 </div>
        </div>

        <div className=' grid grid-cols-3 gap-6'>
          <div className='text-white  text-center '>
            <h1 className='mt-8'>Rencanakan kunjungan</h1>
            <h2 className='mt-4'>Harga tiket</h2>
            <h2 className='mt-2'>Jadwal feading</h2>
            <h2 className='mt-2'>Denah zoo</h2>
          </div>
          <div className='text-white text-center'>
            <h1 className='mt-8'>Info lengkap</h1>
            <h2 className='mt-4'>Tentang kami</h2>
          </div>
          <div className='text-white text-center'>
            <h1 className='mt-8'>Kebijakan Privasi</h1>
            <h2 className='mt-4'>Privasi Polisi</h2>
          </div>
        </div>



      </div>




      <div className=' grid grid-cols-4 gap-14 mt-24'>
        <div className=' h-[50px] flex justify-center '><FaInstagram className='h-10 w-10 mr-4 text-white' />
          <h1 className='mt-4 text-white'>rrzo_oficial</h1>
        </div>

        <div className=' h-[50px] flex justify-center'><AiFillTikTok className='h-10 w-10 mr-4 text-white' />
          <h1 className='mt-4 text-white'>rrzo_oficial</h1>
        </div>

        <div className=' h-[50px] flex justify-center'><FaYoutube className='h-10 w-10 mr-4 text-white' />
          <h1 className='mt-4 text-white'>rrzo_oficial</h1>
        </div>

        <div className=' h-[50px] flex justify-center'><FaFacebook className='h-10 w-10 mr-4 text-white' />
          <h1 className='mt-4 text-white'>rrzo_oficial</h1>
        </div>

      </div>

      <hr className='ml-16 mr-16 mt-3' />


    </div>
  )
}

export default Footer