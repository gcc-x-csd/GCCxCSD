import RankHolder from "@/model/RankHolder";
import connectDB from "@/database/connectDB"

const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        let result = await RankHolder.findOneAndDelete({name: formData.name, rank: formData.rank, year: formData.year}) 
        
        res.status(200).send(`
        <h1 align="center">Rank Holder Deleted Successfully!</h1>
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