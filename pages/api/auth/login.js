/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import VerifiedAlumni from '@/model/VerifiedAlumni'
import mongoose from "mongoose";

const secret = process.env.SECRET;

export default async function (req, res) {
  
    const { email, password } = req?.body;

  // Check User Credentials in Database
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_DB_URI);
  }

  let verified_alumni = await VerifiedAlumni.find();
  let user = undefined
  for (let i = 0; i < verified_alumni.length; i++) {
    if(verified_alumni[i].email == email) {
      if (verified_alumni[i].password == password) {     
        user = verified_alumni[i]
      }
    }
  }
        if (user) {
          const token = sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
              
              userID: user._id,
              userName: user.name,
              userEmail: user.email,
              userSex: user.sex
            },
            secret
          );
          
          const serialised = serialize("gccxcsd_JWT", token, {
            httpOnly: false,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
        
          res.setHeader("Set-Cookie", serialised);
          res.status(200).send(`
          <div> 
              <h1 align="center"></h1>
              <h1 align="center">Successfully logged in as ${user.name}</h1>
              <h1 align="center"><a href='/'>Go to Home</a></h1>
          </div>
          `);
        
        } 
        else {
            res.send(`
            <div> 
                <h1 align="center"></h1>
                <h1 align="center">Invalid Credentials!</h1>
                <h1 align="center"><a href='/login'>Go back to login</a></h1>
            </div>
            `);
        }

}