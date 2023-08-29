import FAQ from "@/model/FAQ"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let frequently_asked_question = await FAQ({
                question: formData.faq,
                answer: formData.faq_answer,
            });
            await frequently_asked_question.save();
     
        res.status(200).send(`
        <div> 
            <h1 align="center">New FAQ added successfully!</h1>
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