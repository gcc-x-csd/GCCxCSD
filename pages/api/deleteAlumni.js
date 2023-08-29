import VerifiedAlumni from "@/model/VerifiedAlumni";
import connectDB from "@/database/connectDB"

const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        let result = await VerifiedAlumni.findOneAndDelete({email: formData.email, mobile_no: formData.phone}) 
        
        res.status(200).send(`<h1 align="center">Successfully deleted a verified alumni!</h1>`);
    }
    else {
        res.status(400).send(`<h1 align="center">Can't complete your request!</h1>`);
}
}

export default connectDB(handler);  
