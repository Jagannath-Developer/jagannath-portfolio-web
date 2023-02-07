import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterComponent() {
  return (
    <div className='container-fluid  border border-1'>
            <div className='text-center mt-3'>
                <h3>AJ Studio</h3>
            </div>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='ms-5 me-5'>
                        <Link className="nav-link  menu_active" to="/services">About</Link>
                    </div>
                    <div className='me-5'>
                    <Link className="nav-link  menu_active" to="/services">Projects</Link>
                    </div>
                    <div className='me-5'>
                    <Link className="nav-link  menu_active" to="/services">Services</Link>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='d-flex justify-content-center'>
                    <div className=' h-auto w-auto borcer border-1 rounded-3 bg-dark py-2 px-3 mx-3 '>
                        <span className='bi bi-facebook  text-light'></span>
                    </div>
                    <div className=' h-auto w-auto  borcer border-1 rounded-3 bg-dark py-2 px-3 mx-3'>
                        <span className='bi bi-instagram  text-light'></span>
                    </div>
                    <div className='h-auto w-auto borcer border-1 rounded-3 bg-dark py-2 px-3 mx-3'>
                        <span className='bi bi-twitter  text-light'></span>
                    </div>
                </div>

            </div>
            <div className='mt-3 text-center '>
                <p>copy right .All right reserved</p>
            </div>

        </div>

 
  )
}
