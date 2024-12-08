"use client" ;
import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";

import { url } from 'inspector'
import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url'
import React from 'react'

const HomeContent = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
    });
  },[]);
  return (
    <div>
        <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage:"url(/pexels-mitchel-durfee-2310075-6230455.jpg)"}}>
            <div className="pl-0 md:pl-16 text-white text-center">
                <h1 className='text-6xl font-bold drop-shadow-md' >Welcom to Watch World</h1>
                <p className="text-2xl mt-4">Your are One Stop Shop For the Best Watches</p>
                <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">Shop Now</button>
            </div>
        </section>
      
    </div>
  )
}

export default HomeContent
