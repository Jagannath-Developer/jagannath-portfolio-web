import React from 'react'



export default function ContactPage() {
    
    return (
        <div className='container'>
            <div className='row justify-content-around mt-5'>
                <div className='col-10 col-lg-3 text-center'>
                    <h2>Talk to me</h2>
                    <div className='card p-3 mt-3'>
                        <div>
                            <span className='bi bi-envelope fs-5'></span>
                        </div>
                        <div>
                            <h5>Email</h5>
                        </div>
                        <div>
                            <p>raojagannath11@gmail.com</p>
                        </div>

                        <div>
                            <p>Write me <span className=' bi bi-arrow-right ms-2'></span></p>
                        </div>

                    </div>
                    <div className='card p-3 mt-3'>
                        <div>
                            <span className='bi bi-whatsapp fs-5'></span>
                        </div>
                        <div>
                            <h5>Whatsapp</h5>
                        </div>
                        <div>
                            <p>+91-898-4665-506</p>
                        </div>

                        <div>
                            <p>Write me <span className=' bi bi-arrow-right ms-2'></span></p>
                        </div>

                    </div>
                </div>
                <div className='col-10 col-lg-4 mt-4 mt-lg-0 '>
                    <h3 className='text-center'>Write me your project</h3>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Insert your name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-primary w-50 p-2 fs-5' >send <span className='bi bi-send ms-2'></span></button>
                    </div>
                </div>

            </div>
        </div>
    )
}
