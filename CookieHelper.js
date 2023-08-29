import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export function getCookie(name) {
  return Cookies.get(name);
}

export function getUID(name) {
  const cookieValue = Cookies.get(name)
    let user = cookieValue ? JSON.parse(JSON.stringify(jwtDecode(cookieValue))) : undefined 
    const u = new Object(user)
  return u.userID;
}


export function getName(name) {
  const cookieValue = Cookies.get(name)
    let user = cookieValue ? JSON.parse(JSON.stringify(jwtDecode(cookieValue))) : undefined 
    const u = new Object(user)
  return u.userName;
}

export function getEmail(name) {
  const cookieValue = Cookies.get(name)
    let user = cookieValue ? JSON.parse(JSON.stringify(jwtDecode(cookieValue))) : undefined 
    const u = new Object(user)
  return u.userEmail;
}

export function getSex(name) {
  const cookieValue = Cookies.get(name)
    let user = cookieValue ? JSON.parse(JSON.stringify(jwtDecode(cookieValue))) : undefined 
    const u = new Object(user)
  return u.userSex;
}





