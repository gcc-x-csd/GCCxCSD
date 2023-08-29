const mongoose = require('mongoose');

const Alumni_Schema = new mongoose.Schema({
          //   Basic Info
               name: {type: String}, 
               email: {type: String, unique: true},
               mobile_no: {type: Number, unique: true},
               password: {type: String},
               sex: {type: String},
               admission_year: {type: Number},
               passing_year: {type: Number},
               current_city: {type: String},

          // Post Graduation or Other Degree after UG
               any_degree_after_ug: {type: String},
               pg_degree: {type: String, default: null},
               pg_specialization: {type: String, default: null},
               pg_admissionYear: {type: Number, default: null},
               pg_passingYear: {type: Number, default: null},

     
          // Current Occupation
               current_occupation: {type: String},
               company_or_org: {type: String, default: null},
               yrs_of_experience: {type: Number, default: null},
               workingInTechField: {type: String},


          // Social URL 
               twitter_url: {type: String, default: null},
               linkedin_url: {type: String, default: null},
               facebook_url: {type: String, default: null},
               instagram_url: {type: String, default: null},
               github_url: {type: String, default: null},
               portfolio_url: {type: String, default: null}

});

mongoose.models = {}

export default mongoose.model("verified_alumni", Alumni_Schema);