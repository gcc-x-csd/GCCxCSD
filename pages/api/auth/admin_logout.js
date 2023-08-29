/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.gccxcsd_Admin;

  if (!jwt) {
    return res.send(`
    <div> 
        <h1 align="center"><br><br><br></h1>
        <h1 align="center">You're not logged in as Admin!!</h1>
        <h1 align="center"><a href='/'>Go to Home</a></h1>
        <h1 align="center"><a href='/admin_login'>Go to Admin Login</a></h1>
    </div>
    `);  
  } 
  else {
    const serialised = serialize("gccxcsd_Admin", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);
    res.status(200).send(`
    <div> 
        <h1 align="center"><br><br><br></h1>
        <h1 align="center">Successfully logged out!!</h1>
        <h1 align="center"><a href='/'>Go to Home</a></h1>
        <h1 align="center"><a href='/admin_login'>Go to Admin Login</a></h1>
    </div>
    `);  
  }
}