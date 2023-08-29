import UpcomingEvents from "@/model/UpcomingEvents"
import EventTimeline from "@/model/EventTimeline"
import connectDB from "@/database/connectDB"
import Link from "next/link";

async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let add_upcoming_event = await UpcomingEvents({
                topic: formData.topic,
                speaker: formData.speaker_name,
                description: formData.description,
         
                day: formData.day,
                month: formData.month,
                year: formData.year,
         
                hour: formData.hours,
                minute: formData.minutes,
                am_pm: formData.am_pm,
         
                gmeet_url: formData.gmeet_url,
            });
            await add_upcoming_event.save();
            
            let event_history_timeline = await EventTimeline({
                topic: formData.topic,
                speaker: formData.speaker_name,
                description: formData.description,
         
                day: formData.day,
                month: formData.month,
                year: formData.year,
         
                hour: formData.hours,
                minute: formData.minutes,
                am_pm: formData.am_pm,
         
            });
            await event_history_timeline.save();

        // }
        res.status(200).send(`
        <div> 
            <h1 align="center">Event successfully registered!</h1>
            <h2 align="center">${formData.topic}</h2>
            <h2 align="center">Event on ${formData.day} ${formData.month}, ${formData.year}</h2>
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