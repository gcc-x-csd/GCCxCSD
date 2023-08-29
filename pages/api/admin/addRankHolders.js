import RankHolder from "@/model/RankHolder"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let rank_holder = await RankHolder({
                name: formData.fullName,
                rank: formData.rank,
                year: formData.year
            });
            await rank_holder.save();
        // }
        res.status(200).send(`
        <div> 
            <h1 align="center">New Rank Holder added successfully!</h1>
            <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
        </div>
        `);
    }
    else {
        res.status(400).send(`
        <div> 
            <h1 align="center">Request can't not be completed!</h1>
            <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
        </div>
        `);
    }
}


export default connectDB(handler);  