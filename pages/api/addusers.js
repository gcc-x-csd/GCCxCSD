import PendingRQST from "@/model/PendingRQST"
import connectDB from "@/database/connectDB"



async function handler(req, res) {
    if (req.method == 'POST'  && (req?.body.createPass == req?.body.confirmPass)) {
        const formData = req?.body;
 

            let submit_registration_rqsts = await PendingRQST({
                name: formData.fullName,
                email: formData.email,
                mobile_no: formData.phone,
                password: formData.confirmPass,
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

        //  Document Proof

        
            });
            await submit_registration_rqsts.save();
        // }
        res.status(200).send(`
        <div>
            <h1 align="center">Your details successfully submitted for review!</h1>
            <h1 align="center">It may take 2-3 days!</h1>
            <h1 align="center"><a href='/'>Go to Home</a></h1>
        </div>
        `);
    }
    else {
        res.status(400).send(`
        <div>
            <h1 align="center">Password mismatched!</h1>
            <h1 align="center"><a href='/register'>Go back</a></h1>
        </div>
        `);
    }
}


export default connectDB(handler);  