/* eslint-disable import/no-anonymous-default-export */
export default async function (req, res) {
    const { cookies } = req;
  
    const jwt = cookies.gccxcsd_JWT;
  
    if (!jwt) {
      return res.json({ message: "Invalid token!" });
    }
  
    return res.json({ data: "Top secret data!" });
  }