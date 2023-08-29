import PendingRQST from "@/model/PendingRQST"
import connectDB from "@/database/connectDB"


const handler = async (req, res) => {
    let pending_registration_rqsts = await PendingRQST.find();
    res.status(200).json({ pending_registration_rqsts })
}


export default connectDB(handler);  