import FAQ from "@/model/FAQ";
import connectDB from "@/database/connectDB"

const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        let result = await FAQ.findOneAndDelete({question: formData.question}) 
        
        res.status(200).send(`
        <h1 align="center">Successfully Deleted FAQ!</h1>
        <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
        `)
    }
    else {
        res.status(400).send(`
        <div> 
            <h1 align="center">Bad Request! Something went wrong.</h1>
            <h2 align="center">Could not complete your request.</h2>
            <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
        </div>
        `);
    }
}


export default connectDB(handler);  