import React from 'react'

export default function ImageGallery({ color }) {
    return (
        <section className={`gallery $(color=="white") ? 'sec-white' : 'sec-black'`}>
            <h1 className='pt-3 poppins-bold text-center'>Image Gallery</h1>
            <div className="container p-0">
                <div className="row m-0 h-100">
                    <div className="col-12 col-md-4 h-100 p-4">
                        <img className='img-fluid h-75 w-100 m-2 img-border' src='https://reactclonerestaurant.vercel.app/static/media/gallery1.8c4a2f3740089891afe1.jpg' />
                        <img className='img-fluid h-25 w-100 m-2 img-border' src='https://reactclonerestaurant.vercel.app/static/media/gallery2.f6db25327629a496a08f.jpg' />
                    </div>
                    <div className="col-12 col-md-4 p-4">
                        <img className='img-fluid h-25 w-100 m-2 img-border' src='https://reactclonerestaurant.vercel.app/static/media/gallery3.dfe8e13217cca62b7837.jpg' />
                        <img className='img-fluid h-75 w-100 m-2 img-border' src='https://reactclonerestaurant.vercel.app/static/media/gallery4.bb2f9624ca0bd49eea72.jpg' />
                    </div>
                    <div className="col-12 col-md-4 p-4">
                        <img className='img-fluid h-75 w-100 m-2 img-border' src='https://reactclonerestaurant.vercel.app/static/media/gallery5.9c3e6699bb860bb5c4ec.jpg' />
                        <img className='img-fluid h-25 w-100 m-2 img-border' src='https://reactclonerestaurant.vercel.app/static/media/gallery6.e36d9c313e0d5cfd7c2c.jpg' />
                    </div>
                </div>
            </div>
        </section>
    )
}
