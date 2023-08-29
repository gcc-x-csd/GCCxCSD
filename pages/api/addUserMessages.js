import UserMessages from "@/model/UserMessages"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;
            let message = await UserMessages({
                fullname: formData.fullName,
                email: formData.email,
                message: formData.message,
            });
            await message.save();
        // }

        res.status(200).send(`
        <h1 align="center"><br><br></h1>
        <h1 align="center">Hello ${formData.fullName}, your message sent to the admin successfully!</h1>
        <h1 align="center"><a href='/'>Go to Home</a></h1>
        `);
    }
    else {
        res.status(400).send(`
        <h1 align="center">Can't complete your request!</h1>
        <h1 align="center">Something went wrong.</h1>
        <h1 align="center"><a href='/'>Go to Home</a></h1>
        `)
    }
}


export default connectDB(handler);  