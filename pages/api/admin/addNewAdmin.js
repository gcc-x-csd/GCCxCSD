import Admin from "@/model/Admin"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST' && req?.body.create_password == req?.body.confirm_password) {
        const formData = req?.body;

            let add_admin = await Admin({
                email: formData.email,
                password: formData.confirm_password,
            });
            await add_admin.save();
        // }
        res.status(200).send(`
        <h1 align="center">New Admin Registered Successfully!</h1>
        <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
        `)
    }
    else {
        res.status(400).send(`
        <div> 
            <h1 align="center">Could not complete your request. Password Mismatched!</h1>
            <h2 align="center">Please, check and confirm your password carefully!</h2>
            <h1 align="center"><a href='/admin/dashboard'>Go to Dashboard</a></h1>
        </div>
        `);
    }
}


export default connectDB(handler);  