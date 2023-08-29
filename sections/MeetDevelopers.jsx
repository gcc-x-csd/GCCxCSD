import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsInstagram, BsGlobe2 } from 'react-icons/bs'
import { Developer } from '@/components'
import { anuj, debojyoti, kaustav } from '@/util'

const MeetDevelopers = () => {
  return (
    <section className="bg-gray-950/70 mt-12">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Developers</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
      </div> 
      
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
          <Developer image={anuj.image} name={anuj.name} role={anuj.role} email={anuj.email} 
          facebook={anuj.socials.facebook} 
          instagram={anuj.socials.instagram} 
          twitter={anuj.socials.twitter} 
          github={anuj.socials.github} 
          linkedin={anuj.socials.linkedin} 
          portfolio={anuj.socials.portfolio} />
          
         <Developer image={kaustav.image} name={kaustav.name} role={kaustav.role} email={kaustav.email} 
          facebook={kaustav.socials.facebook} 
          instagram={kaustav.socials.instagram} 
          twitter={kaustav.socials.twitter} 
          github={kaustav.socials.github} 
          linkedin={kaustav.socials.linkedin} 
          portfolio={kaustav.socials.portfolio} />

         <Developer image={debojyoti.image} name={debojyoti.name} role={debojyoti.role} email={debojyoti.email} 
          facebook={debojyoti.socials.facebook} 
          instagram={debojyoti.socials.instagram} 
          twitter={debojyoti.socials.twitter} 
          github={debojyoti.socials.github} 
          linkedin={debojyoti.socials.linkedin} 
          portfolio={debojyoti.socials.portfolio} />

        
          
      </div>  
  </div>
</section>
  )
}

export default MeetDevelopers
