import { useEffect } from "react";
import Head from "next/head";
import '@/styles/globals.css'
import '@/styles/Home.module.css'
import { Header, Footer } from "@/components";
import { _id, _email, _fname } from '@/middleware'
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { RequestCookies } from "@edge-runtime/cookies";
import jwtDecode from "jwt-decode";
import { cookies } from "next/headers";



export default function App({ Component, pageProps: {...pageProps } }) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
    });
  }, []);


  return (
    <>
      <Head />
      <Header />     
      <Component {...pageProps}/>
      <Footer />
    </>
  )
}


