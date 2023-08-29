import EventTimeline from "@/model/EventTimeline";
import connectDB from "@/database/connectDB"

const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        let result = await EventTimeline.findOneAndDelete({topic: formData.topic}) 
        
        res.status(200).send(`<h1 align="center">Successfully deleted an event from history timeline!</h1>`);
    }
    else {
        res.status(400).send(`<h1 align="center">Can't complete your request!</h1>`);
}
}

export default connectDB(handler);  
