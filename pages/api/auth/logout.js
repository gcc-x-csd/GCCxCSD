/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.gccxcsd_JWT;

  if (!jwt) {
    return res.json({ message: "Bro you are already not logged in..." });
  } else {
    const serialised = serialize("gccxcsd_JWT", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).send(`
    <div> 
        <h1 align="center"></h1>
        <h1 align="center">Successfully logged out!</h1>
        <h1 align="center"><a href='/'>Go to Home</a></h1>
    </div>
    `);
  }
}