import React from 'react'
import Header from '../common/header'
import './pages.css'
import { Link } from 'react-router-dom'
import ImageGallery from './imagegallery'
import Footer from '../common/footer'

export default function Home() {
    return (
        <>
            <Header />
            {/* Home background section */}
            <section className='home-img-sec  d-flex align-content-center'>
                <div className='container h-100'>
                    <div className='row '>
                        <div className='col-12 col-lg-8'>
                            <div>
                                <h2 className='poppins-regular'>Welcome To</h2>
                                <h1 className='poppins-bold home-img-heading'>React Restaurant</h1>
                                <button type="button" class="btn btn-success mt-4 poppins-regular">
                                    <Link to={'/menu'} className='text-white text-decoration-none'>Our full menu</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Home about section */}
            <section className='home-about-sec  d-flex justify-content-center align-items-center'>
                <div className="container p-0 h-100 ">
                    <div className="row m-0 h-100 ">
                        <div className="col-12 col-lg-6 home-about-img p-0">
                            <img
                                src="https://reactclonerestaurant.vercel.app/static/media/about-img.6d1d7306b05a41b97036.jpg"
                                alt='About Restaurant Image' className='w-50 img-fluid'></img>
                        </div>
                        <div className="col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center flex-column">
                            <div className='text-center'>
                                <h2 className='poppins-bold'>ABOUT US</h2>
                                <p className='text-start poppins-regular'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate
                                    aut dolore ullam quasi numquam quod molestias cum officiis perspiciatis?</p>
                                <p className='text-start poppins-regular'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni animi
                                    tenetur eaque vel accusamus placeat quaerat ad. Similique quaerat qui
                                    doloribus assumenda deserunt tenetur quas suscipit officiis quod sequi?</p>
                                <button type="button" class="btn btn-lg btn-outline-success more-btn mt-3">
                                    <Link to={'/about'} className=' text-decoration-none'>More About us</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Home Favourite section */}
            <section className='home-fav-sec text-white'>
                <h1 className='text-center poppins-bold pt-4'>Our Favorites</h1>
                <div className="container p-0 ">
                    <div className="row m-0">
                        <div className="col-12 col-lg-6 p-0">
                            <h2 className='text-center poppins-medium'>Food</h2>
                            <ul class="nav flex-column text-center mt-5 p-5 fav-list">
                                <li class="nav-item poppins-regular d-flex justify-content-between">
                                    <p class="nav-link text-white d-inline-block">English Breakfast</p>
                                    <p class="nav-link text-success d-inline-block">£12</p>
                                </li>
                                <li class="nav-item poppins-regular d-flex justify-content-between">
                                    <p class="nav-link text-white d-inline-block">Spicy Beef</p>
                                    <p class="nav-link text-success d-inline-block">£15</p>
                                </li>
                                <li class="nav-item poppins-regular d-flex justify-content-between">
                                    <p class="nav-link text-white d-inline-block">Saghetti Bolognese</p>
                                    <p class="nav-link text-success d-inline-block">£11</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 p-0">
                            <h2 className='text-center poppins-medium'>Drinks</h2>
                            <ul class="nav flex-column text-center mt-5 p-5 fav-list">
                                <li class="nav-item poppins-regular d-flex justify-content-between">
                                    <p class="nav-link text-white d-inline-block">Coffee</p>
                                    <p class="nav-link text-success d-inline-block">£2</p>
                                </li>
                                <li class="nav-item poppins-regular d-flex justify-content-between">
                                    <p class="nav-link text-white d-inline-block">Juice</p>
                                    <p class="nav-link text-success d-inline-block">£1</p>
                                </li>
                                <li class="nav-item poppins-regular d-flex justify-content-between">
                                    <p class="nav-link text-white d-inline-block">Spirits</p>
                                    <p class="nav-link text-success d-inline-block">£5</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-12 p-0 text-center">
                            <button type="button" class="btn btn-lg bg-success  mt-3">
                                <Link to={'/menu'} className='text-white text-decoration-none'>Our Full Menu</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Component */}
            <ImageGallery color={'white'} />

            {/* Find us Section */}
            <section className='home-find-sec mt-2 d-flex justify-content-center align-items-center'>
                <div className="container p-0 h-100">
                    <div className="row m-0 h-100">
                        <div className="col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center text-center">
                            <div className='text-white'>
                                <h1 className='text-center pt-4'>Where To Find Us</h1>
                                <p className='text-center poppins-regular mt-2'>47 Baker Street, London LD1 0ND</p>
                                <h4 className='text-center poppins-bold mt-5'>Opening Hours</h4>
                                <p className='text-center poppins-regular m-0'>Mon - Fri: 09:00 - 17:00</p>
                                <p className='text-center poppins-regular m-0'>Sat - Sun: 10:00 - 15:00</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-0">
                            <img src='https://reactclonerestaurant.vercel.app/static/media/contact-img.d683a0bb9ff6c65c295a.jpg'
                                className='findus-img img-fluid w-50' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Component */}
            <Footer />
        </>
    )
}
