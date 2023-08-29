/* eslint-disable react-hooks/rules-of-hooks */
import { NextResponse } from 'next/server'
import jwtDecode from 'jwt-decode';


var _userName = 'Guest';
var _userEmail = `You're not logged in!`;

export function middleware(req) {

    const userToken = req.cookies.get('gccxcsd_JWT');
    const adminToken = req.cookies.get('gccxcsd_Admin');
  
    let user = userToken ? JSON.parse(JSON.stringify(jwtDecode(userToken.value))) : undefined

    // console.log(user);
     _userName = user ? _userName.replace('Guest',user.userName) : 'Guest'
     _userEmail = user ? _userEmail.replace(`You're not logged in!`,user.userEmail) : `You're not logged in!`

  

    // console.log(_userName);
    // console.log(_userEmail);








    if(req.nextUrl.pathname.startsWith('/about')) {
// This logic is only applied to /about
    console.log('about page');
    }

//  This logic is only applied to /admin/dashboard
    if(!adminToken && req.nextUrl.pathname.startsWith('/admin/dashboard')) {
        const url = req.nextUrl.clone()
        url.pathname = '/admin_login'
        return NextResponse.rewrite(url)
    }

    if(adminToken && (req.nextUrl.pathname.startsWith('/admin/dashboard'))) {
        const url = req.nextUrl.clone()
        url.pathname = '/admin/dashboard'
        return NextResponse.rewrite(url)
    }



// This logic is only applied to /alumni
// If the cookies are not found means user is not logged in.
// If user wants to access Alumni Page then we will redirect to Login Page
    if(!userToken && req.nextUrl.pathname.startsWith('/alumni')) {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.rewrite(url)
    }


//  If the user is already logged in then that user can not access Login and Registration Page before Logout
//  If user tries to access them manually by editing the url then they will be redirected to home page
    if(userToken && (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register'))) {
      const url = req.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.rewrite(url)
    }
    
}



export {
   _userName,
   _userEmail
}