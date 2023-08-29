import React from 'react'
import { AlumniComponent } from '@/components'

const DegreeFilter = ({ Database, value }) => {
  return (
    <div className='max-w-4xl lg:mx-32 py-12'> {Database.map((user) => (
        <div key={user._id}> { user.pg_degree==`${value}`  && (
          <AlumniComponent key={user._id} _fullName={user.name} _email={user.email} 
          _sex={user.sex} _ugAdmissionYear={user.admission_year} _ugPassingYear={user.passing_year} 
          _currentCity={user.current_city} _currentOccupation={user.current_occupation}
          _currentCompany={user.company_or_org} _yearsOfExperience={user.yrs_of_experience}
                
          _anyDegreeAfterUG={user.any_degree_after_ug} _lastDegree={user.pg_degree}
          _lastDegreeSpecialization={user.pg_specialization} _pgAdmissionYear={user.pg_admissionYear} 
          _pgPassingYear={user.pg_passingYear} 
                
          _facebook_url={user.facebook_url}
          _instagram_url={user.instagram_url}
          _twitter_url={user.twitter_url}
          _linkedin_url={user.linkedin_url}
          _github_url={user.github_url}
          _portfolio_url={user.portfolio_url}
            />
          )}
        </div> 
      ))}
      </div>
  )
}

export default DegreeFilter
