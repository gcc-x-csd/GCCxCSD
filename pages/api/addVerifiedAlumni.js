import VerifiedAlumni from "@/model/VerifiedAlumni"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let verified_alumni = await VerifiedAlumni({
        
        // Basic Info
                name: formData.fullName,
                email: formData.email,
                mobile_no: formData.phone,
                password: formData.password,
                sex: formData.sex,
                admission_year: formData.admissionYear,
                passing_year: formData.passingYear,
                current_city: formData.currentCity,
         
        // Post Graduation or Other Degree after UG
                any_degree_after_ug: formData.any_degree_after_ug,
                pg_degree: formData.pg_degree,
                pg_specialization: formData.pg_specialization,
                pg_admissionYear: formData.pg_admissionYear,
                pg_passingYear: formData.pg_passingYear,
         
                
         // Current Occupation
                current_occupation: formData.current_occupation,
                company_or_org: formData.company_or_org,
                yrs_of_experience: formData.yrs_of_experience,
                workingInTechField: formData.workingInTechField,
         
               
        // Social URL 
                twitter_url: formData.twitter_url,
                linkedin_url: formData.linkedin_url,
                facebook_url: formData.facebook_url,
                instagram_url: formData.instagram_url,
                github_url: formData.github_url,
                portfolio_url: formData.portfolio_url,

        //  Document Proof

        
            });
            await verified_alumni.save();
        // }
        res.status(200).send(`<h3 align="center">Successfully verified ${formData.fullName} as our Alumni!</h3>`);
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" });
    }
}


export default connectDB(handler);  