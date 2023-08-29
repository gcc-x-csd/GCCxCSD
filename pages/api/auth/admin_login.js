/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import Admin from "@/model/Admin";
import mongoose from "mongoose";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { email, password } = req?.body;

// Check in the database if a user with this username and password exists
      if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_DB_URI);
      }

      let admin_collection = await Admin.find();
      let admin = undefined

      for (let i = 0; i < admin_collection.length; i++) {
        if(admin_collection[i].email == email) {
          if (admin_collection[i].password == password) {     
            admin = admin_collection[i]
          }
        }
      }

if (admin) {
    const token = sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days  
      userID: admin._id,
      userEmail: admin.email,
    }, secret );

    const serialised = serialize("gccxcsd_Admin", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);
    res.status(200).send(`
    <div> 
        <h1 align="center"><br><br><br></h1>
        <h1 align="center">Successfully logged in as Admin!</h1>
        <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
    </div>
    `);
}
else if (email === process.env.ADMIN_ID && password === process.env.ADMIN_PASS) {
    const token = sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        email: process.env.ADMIN_ID,
      }, secret );

    const serialised = serialize("gccxcsd_Admin", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
  
    res.setHeader("Set-Cookie", serialised);
    res.status(200).send(`
    <div> 
        <h1 align="center"><br><br><br></h1>
        <h1 align="center">Successfully logged in as Admin!</h1>
        <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
    </div>
    `);  
} 
else {
    res.send(`
    <div> 
        <h1 align="center"><br><br><br></h1>
        <h1 align="center">Invalid Credentials!</h1>
        <h1 align="center"><a href='/'>Go to Home</a></h1>
        <h1 align="center"><a href='/admin_login'>Go to Admin Login</a></h1>
    </div>
    `);
  }
}
