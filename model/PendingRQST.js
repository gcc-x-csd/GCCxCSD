const mongoose = require('mongoose');

const PendingRQST_Schema = new mongoose.Schema({
       name: {type: String, required: true}, 
       email: {type: String, required: true, unique: true},
       mobile_no: {type: Number, required: true, unique: true},
       password: {type: String, required: true},
       sex: {type: String, required: true},
       admission_year: {type: Number, required: true},
       passing_year: {type: Number, required: true},
       current_city: {type: String, required: true},

// Post Graduation or Other Degree after UG
       any_degree_after_ug: {type: String, required: true},
       pg_degree: {type: String, default: null},
       pg_specialization: {type: String, default: null},
       pg_admissionYear: {type: Number, default: null},
       pg_passingYear: {type: Number, default: null},

       
// Current Occupation
       current_occupation: {type: String, required: true},
       company_or_org: {type: String, default: null},
       yrs_of_experience: {type: Number, default: null},
       workingInTechField: {type: String, required: true},

      
       // Social URL 
          twitter_url: {type: String, default: null},
          linkedin_url: {type: String, default: null},
          facebook_url: {type: String, default: null},
          instagram_url: {type: String, default: null},
          github_url: {type: String, default: null},
          portfolio_url: {type: String, default: null}
      
});

mongoose.models = {}

export default mongoose.model("pending_registration_requests", PendingRQST_Schema);