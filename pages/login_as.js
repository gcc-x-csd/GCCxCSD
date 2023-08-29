import React from 'react'
import { LoginTypeCard, SubHeader } from '@/components'


const login_as = () => {
  return (
    <>
    <div className='bg-gradient-to-br from-black to-indigo-800 w-[100%] lg:h-[100vh]'>
    <SubHeader text='Select Login Type!' />
    
      <div className='flex justify-around flex-wrap bg-black/60 w-[100%] py-6 rounded-md mt-10 md:px-4 lg:p-8'>
      {/* route_URL will be used to refer the type of form  */}
        <LoginTypeCard route_URL='/forms/admin_login'
        name='Admin!' 
        logo_url='/lock.png' 
        alt_text='admin-logo'
        description='Only Admin can Log-in here!' />
  
        <LoginTypeCard route_URL='/forms/user_login'
        name='Alumni / Students!' 
        logo_url='/user-student.png' 
        alt_text='students-logo'
        description='Students and Alumni of the Department of Computer Science can Log-in / Register here!' />
        
        <LoginTypeCard route_URL='/forms/protected_view'
        name='Protected View!' 
        logo_url='/protected.png' 
        alt_text=''
        description='Only members those are authorized and verified by the Department of Computer Science can view everything via this route without Log-in!' />
        
      </div>    
    </div>
    </>
  )
}

export default login_as
