import AccessCodes from "@/model/AccessCode"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let add_access_code = await AccessCodes({
                access_code: formData.access_code,
            });
            await add_access_code.save();
        // }
        res.status(200).send(`
        <div> 
            <h1 align="center">New access code generated and saved successfully!</h1>
            <h1 align="center">${formData.access_code}</h1>
            <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
        </div>
        `);
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