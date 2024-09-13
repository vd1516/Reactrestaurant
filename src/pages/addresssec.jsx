import React from 'react'

export default function AddresSsec({isWhite}) {
    return (
        <div className="col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center text-center">
            <div className={`${(isWhite) ? 'white' : 'black'}`}>
                <h1 className='text-center pt-4'>Where To Find Us</h1>
                <p className='text-center poppins-regular mt-2'>47 Baker Street, London LD1 0ND</p>
                <h4 className='text-center poppins-bold mt-5'>Opening Hours</h4>
                <p className='text-center poppins-regular m-0'>Mon - Fri: 09:00 - 17:00</p>
                <p className='text-center poppins-regular m-0'>Sat - Sun: 10:00 - 15:00</p>
            </div>
        </div>
    )
}
