import React from 'react'
import { AlumniComponent } from '@/components'

const DefaultLatestTenAlumni = ({ verified_alumni, num }) => {
  return (
    <div className=''> 
  
        <div> 
          <AlumniComponent _fullName={verified_alumni[verified_alumni.length-num].name} _email={verified_alumni[verified_alumni.length-num].email} 
          _sex={verified_alumni[verified_alumni.length-num].sex} _ugAdmissionYear={verified_alumni[verified_alumni.length-num].admission_year} _ugPassingYear={verified_alumni[verified_alumni.length-num].passing_year} 
          _currentCity={verified_alumni[verified_alumni.length-num].current_city} _currentOccupation={verified_alumni[verified_alumni.length-num].current_occupation}
          _currentCompany={verified_alumni[verified_alumni.length-num].company_or_org} _yearsOfExperience={verified_alumni[verified_alumni.length-num].yrs_of_experience}
                
          _anyDegreeAfterUG={verified_alumni[verified_alumni.length-num].any_degree_after_ug} _lastDegree={verified_alumni[verified_alumni.length-num].pg_degree}
          _lastDegreeSpecialization={verified_alumni[verified_alumni.length-num].pg_specialization} _pgAdmissionYear={verified_alumni[verified_alumni.length-num].pg_admissionYear} 
          _pgPassingYear={verified_alumni[verified_alumni.length-num].pg_passingYear} 
                
          _facebook_url={verified_alumni[verified_alumni.length-num].facebook_url}
          _instagram_url={verified_alumni[verified_alumni.length-num].instagram_url}
          _twitter_url={verified_alumni[verified_alumni.length-num].twitter_url}
          _linkedin_url={verified_alumni[verified_alumni.length-num].linkedin_url}
          _github_url={verified_alumni[verified_alumni.length-num].github_url}
          _portfolio_url={verified_alumni[verified_alumni.length-num].portfolio_url}
          />
        </div> 

      </div>
  )
}
export default DefaultLatestTenAlumni
