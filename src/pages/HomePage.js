import React from 'react'
import resume from '../images/resume.pdf'
import '../styles/HomePage.css'
import profile from '../images/profile.jpg'
export default function HomePage() {
  return (
    <div className='container'>
      <div className='row p-4'>
        <div className='col-12 col-lg-6 order-1 order-lg-0'>
          <div className='mt-5'>
            <h1 className='text-warning'>Jagannath</h1>
            <div>
              <h4 className=' mt-4 home_subtitle'> Frontend Developer</h4>
            </div>
          </div>
          <div className='mt-4 pe-3'>
            <h5 className="text-secondary fw-normal">i'm a UI , Frontend Developer on India , and I'm very passionate and dedicatd to my work..</h5>
          </div>
          <div className='button_div'>
            <button className='btn btn-dark px-4 py-2'><a href={resume} download className='text-decoration-none text-white'> Download CV  <span className='bi bi-file-earmark-arrow-down text-white '></span> </a></button>
          </div>

        </div>
        <div className='col-12 col-lg-6 order-0 order-lg-1'>

          <div className="hom_image d-flex justify-content-center mt-5" >
            <img src={profile} alt="profile_image" className='profile_image' />

          </div>
        </div>

      </div>
    </div>
  )
}
