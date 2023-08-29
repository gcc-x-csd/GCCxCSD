import VerifiedAlumni from "@/model/VerifiedAlumni"
import connectDB from "@/database/connectDB"
import { getUID } from "@/CookieHelper";


const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        const userID = formData.userID;
        const userName = formData.fullName

        let verified_alumni = await VerifiedAlumni.findByIdAndUpdate(userID, {
        // Basic Info
                name: formData.fullName,
                email: formData.email,
                mobile_no: formData.phone,
                password: formData.update_pass,
                sex: formData.sex,
                admission_year: formData.admissionYear,
                passing_year: formData.passingYear,
                current_city: formData.currentCity,
         
         // Post Graduation or Other Degree after UG
                any_degree_after_ug: formData.pg,
                pg_degree: formData.pgDegree,
                pg_specialization: formData.pgSpecialization,
                pg_admissionYear: formData.pgStartingYear,
                pg_passingYear: formData.pgPassingYear,
         
                
         // Current Occupation
                current_occupation: formData.current_occupation,
                company_or_org: formData.companyName,
                yrs_of_experience: formData.yrsOfExp,
                workingInTechField: formData.tech,
         
               
        // Social URL 
                twitter_url: formData.twitter_url,
                linkedin_url: formData.linkedIn_url,
                facebook_url: formData.fb_url,
                instagram_url: formData.insta_url,
                github_url: formData.github_url,
                portfolio_url: formData.portfolio_url,
                
            })
        
        res.status(200).send(`
        <div> 
            <h1 align="center"></h1>
            <h1 align="center">Successfully updated details of ${userName}</h1>
            <h1 align="center"><a href='/user/${userID}'>Go to my profile</a></h1>
        </div>
        `);
    }
    else {
        res.status(400).send(`
        <div> 
            <h1 align="center"></h1>
            <h1 align="center">Not updated successfully !</h1>
            <h1 align="center"><a href='/user/${userID}'>Go to my profile</a></h1>
        </div>
        `);
    }
}


export default connectDB(handler);  


