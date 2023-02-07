import React, { useState } from 'react'

import skill from '../images/skills';

export default function SkillsPage() {
  const [frontEnd, setFrontEnd] = useState(skill[0].frontEnd)
  const [backEnd, setBackEnd] = useState(skill[0].backEnd)
  return (
    <div className='container'>
    <div className='d-flex justify-content-center mt-5 text-center'>
        <div>
            <h1>Skills</h1>
            <h5 className='text-secondary'>My technical levels</h5>
        </div>
    </div>
    <div className="container mt-5">
        <div className='row justify-content-center'>
            <div className='col-12 col-lg-4 order-0 order-lg-0'>
                <div className="card shadow pb-4 " >
                    <div className="pt-5 pb-4 text-center" >
                        <h4 >Frontend Developer</h4>
                    </div>
                    <div className='row row-cols-2  justify-content-between ms-4 '>
                    {
                            frontEnd.map((item, index) => 
                                (
                                    <div className='d-flex ' key={index}>
                                        <div>
                                            <img src="https://img.icons8.com/fluency-systems-filled/48/null/verified-badge.png" alt="twitter" style={{ "height": "22px", "width": "22px" }} />
                                        </div>
                                        <div className='ms-3'>
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>

            </div>
            <div className='col-12 col-lg-4 mt-4 mt-lg-0 order-1 order-lg-1'>
                <div className="card shadow pb-4 " >
                    <div className="px-4 pt-5 pb-4 text-center" >
                        <h4 >Backend Developer</h4>
                    </div>
                    <div className='row row-cols-2  justify-content-between ms-4 '>
                        {
                            backEnd.map((item, index) => 
                                (
                                    <div className='d-flex ' key={index}>
                                        <div>
                                            <img src="https://img.icons8.com/fluency-systems-filled/48/null/verified-badge.png" alt="twitter" style={{ "height": "22px", "width": "22px" }} />
                                        </div>
                                        <div className='ms-3'>
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
  )
}
