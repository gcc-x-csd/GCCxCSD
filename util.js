export const grpahCMSImageLoader = ({ src }) => src;



// ---------------------- ADD, REMOVE & UPDATE IMAGES URLs for: ---------------------- //

// 1. HOME PAGE - SLIDER 
const homeSliderImages = [ 
  { url: '/gallery/graduate.jpg' },
  { url: '/gallery/classroom.jpg' },
  { url: '/gallery/students.jpg' },
  { url: '/gallery/tree.jpg' },
  { url: '/gallery/lake.jpg' },
  { url: '/gallery/grass.jpg' },
  ]





// 2. ABOUT PAGE - SLIDER
const aboutSliderImages = [ 
  { url: '/home_slider/1.jpg' },
  { url: '/home_slider/2.jpg' },
  { url: '/home_slider/3.jpg' },
  { url: '/home_slider/4.jpg' },
  { url: '/home_slider/5.jpg' },
  { url: '/home_slider/6.jpg' },
  ]
 



  
// 3. CSxGALLERY PAGE IMAGE URLs
const galleryImages = [
  { url: '/gallery/5.jpg' },
  { url: '/gallery/1.jpg' },
  { url: '/gallery/7.jpg' },
  { url: '/gallery/8.jpg' },
  { url: '/gallery/14.jpg' },
  { url: '/gallery/6.jpg' },
  { url: '/gallery/9.jpg' },
  { url: '/gallery/10.jpg' },
  { url: '/gallery/11.jpg' },
  { url: '/gallery/12.jpg' },
  { url: '/gallery/16.jpg' },
  { url: '/gallery/4.jpg' },
  { url: '/gallery/15.jpg' },
  { url: '/gallery/17.jpg' },
  { url: '/gallery/13.jpg' },
    { url: '/gallery/18.jpg' },
    { url: '/gallery/19.jpg' },
    { url: '/gallery/23.jpg' },
    { url: '/gallery/22.jpg' },
    { url: '/gallery/21.jpg' },
    { url: '/gallery/20.jpg' },
    { url: '/gallery/24.jpg' },
    { url: '/gallery/25.jpg' },
    { url: '/gallery/26.jpg' },
    { url: '/gallery/27.jpg' },
    { url: '/gallery/28.jpg' },
]




// 4. Developers Info {}

const anuj = {
      image: '/developers/anuj.jpg',
      name: 'Anuj Das',
      role: 'Full Stack Developer',
      email: 'anujdas10.personal@outlook.com',

      socials: {
        facebook: '',
        instagram: '',
        twitter: '',
        github: '',
        linkedin: '',
        portfolio: ''
      }
}

const debojyoti = {
  image: '/developers/debojyoti.jpg',
  name: 'Debojyoti Chakraborty',
  role: 'UI/UX Designer & Backend Developer',
  email: 'debojyotichak28@gmail.com',

  socials: {
    facebook: '',
    instagram: '',
    twitter: '',
    github: '',
    linkedin: '',
    portfolio: ''
  }
}

const kaustav = {
  image: '/developers/kaustav.jpg',
  name: 'Kaustav Purkayastha',
  role: 'Frontend Developer',
  email: 'kaustavpurk2@gmail.com',

  socials: {
    facebook: '',
    instagram: '',
    twitter: '',
    github: '',
    linkedin: '',
    portfolio: ''
  }
}













// ******** Mandatory Exports ******** //
export {
    galleryImages, 
    aboutSliderImages, 
    homeSliderImages,
  anuj,
  kaustav,
  debojyoti
}; 