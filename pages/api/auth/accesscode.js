/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import AccessCode from '@/model/AccessCode'
import mongoose from "mongoose";


const secret = process.env.SECRET;

export default async function (req, res) {
  
    const { accessCode } = req?.body;

  // Check in the database
  // if a user with this username
  // and password exists
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_DB_URI);
  }

  let access_code = await AccessCode.find();
//   console.log(verified_alumni);
  let code = undefined
  for (let i = 0; i < access_code.length; i++) {
    if(access_code[i].access_code == accessCode) { 
        code = access_code[i]
    }
  }
        if (code) {
          const token = sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 1 days
              data: code,
            },
            secret
          );
          
          const serialised = serialize("gccxcsd_JWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
        
          res.setHeader("Set-Cookie", serialised);
          res.status(200).send(`Access Granted!`);
        
        } 
        else {
            res.json({ message: "Invalid credentials!" });
        }

}