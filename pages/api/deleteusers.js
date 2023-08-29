import PendingRQST from "@/model/PendingRQST"
import connectDB from "@/database/connectDB"

const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        const name = formData.fullName;
        let result = await PendingRQST.findOneAndDelete({email: formData.email, mobile_no: formData.phone}) 
        
        res.status(200).send(`<h3 align="center">Successfully Deleted request from ${name}!</h3>`)
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" })
    }
}


export default connectDB(handler);  
