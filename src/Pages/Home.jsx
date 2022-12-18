import React from 'react'
import Navbar from './Navbar'
import CoverPage from './CoverPage'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Responsible from './Responsible'
import Album from './Album'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    document.title=" Renter |  Home "
  })


  return (
   <>
   {/* <Navbar/> */}
   <CoverPage/>
   <Responsible/>
   {/* <Album/> */}
   <Testimonial/>

   {/* <Footer/> */}
   
   </> 
   
  )
}
