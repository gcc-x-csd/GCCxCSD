import Admin from "@/model/Admin";
import connectDB from "@/database/connectDB"

const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        let result = await Admin.findOneAndDelete({email: formData.admin_email}) 
        
        res.status(200).send(`
        <h1 align="center">Successfully Deleted Admin!</h1>
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