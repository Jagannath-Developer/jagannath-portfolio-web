import React from 'react'
import profile from '../images/profile.jpg'
import resume from '../images/resume.pdf'

export default function AboutPage() {
  return (
    <div className='container pt-5'>
      <div className='text-center'>
        <h1>About Me</h1>
        <div>
          <p>My introduction</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-sm-6 '>
          {/* <div className='d-flex justify-content-center'>
            <img className='border rounded-5' src="https://www.themoviedb.org/t/p/w500/mNQA0qYtLeemo7mljd9RlG9jUMR.jpg" alt="my_image" style={{
              "width": "300px",
              "height": "450px"
            }} />
          </div> */}
          <div className='d-flex justify-content-center'>
            <img className='border rounded-4' src={profile} alt="my_image" style={{
              "width": "300px",
              "height": "450px"
            }} />
          </div>
        </div>
        <div className='col-lg-6 col-sm-6 mt-5 mt-lg-0'>
          <div className='row'>
            <div className="col-lg-4 col-sm-6 mt-3" >
              <div className="card border border-0 shadow text-center " >
                <div className="px-4 py-3" >
                  <div>
                    <span className='bi bi-browser-chrome' style={{ "font-size": "30px" }} ></span>
                  </div>
                  <h5>Experiance</h5>
                  <p>2+ years</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3" >
              <div className="card border border-0 shadow text-center " >
                <div className="px-4 py-3" >
                  <div>
                    <span className='bi bi-browser-chrome' style={{ "font-size": "30px" }} ></span>
                  </div>
                  <h5>Completed</h5>
                  <p>2 projects</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-3" >
              <div className="card border border-0 shadow text-center " >
                <div className="px-4 py-3" >
                  <div>
                    <span className='bi bi-telephone' style={{ "font-size": "30px" }} ></span>
                  </div>
                  <h5>Support</h5>
                  <p>Online 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h4 className='opacity-50'>Frontend developer, I create web pages with UI /UX user
              interface, i have years of experiance and many cient are happy with the projects carried out.</h4>
          </div>
          <div className='mt-5'>
            <button className='btn btn-dark px-4 py-2'><a href={resume} download className='text-decoration-none text-white'> Download CV  <span className='bi bi-file-earmark-arrow-down text-white'></span> </a></button>
            
          </div>

        </div>

      </div>

    </div>
  )
}
