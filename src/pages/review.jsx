import React from 'react'
import './pages.css'
import ReviewCompo from './reviewcompo'
import { reviewArr } from '../datas/reviewdata'

export default function Review({color,txtColor}) {

    let data = reviewArr.map((v, i) => {
        return (
            <div className='col-12 col-lg-6 p-0' key={i}>
                <div className='rev-div m-3  bg-white'>
                    <div className='rvwprofile d-flex align-items-center'>
                        <p className='mb-0 ps-4 poppins-regular'>{v.reviews}</p>
                    </div>
                    <div className='rvwprofile bg-light border-top border-4 d-flex align-items-center '>
                        <img width={'80px'} className='ms-5 rounded-circle' src={v.image} />
                        <h5 className='ms-2 mb-0 poppins-medium text-success'>{v.name}</h5>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className='review-sec pt-5' style={{background:`${color}`}}>
            <h1 className='text-center poppins-bold m-0' style={{color:`${txtColor}`}}>REVIEWS</h1>
            <div className="container p-0">
                <div className="row m-0">
                    {data}
                </div>
            </div>
        </section>
    )
}
