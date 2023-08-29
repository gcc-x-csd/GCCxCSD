import VerifiedAlumni from "@/model/VerifiedAlumni";
import connectDB from "@/database/connectDB"


const handler = async (req, res) => {
    let verified_alumni = await VerifiedAlumni.find();
    res.status(200).json({ verified_alumni })
}


export default connectDB(handler);  