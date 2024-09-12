import React, { useEffect } from 'react'
import Header from '../common/header'
import MenuImgSec from './menuimgsec'
import MenuListSec from './menulistsec'
import Footer from '../common/footer'

export default function Menu() {

  return (
    <>
      <Header />
      {/* Menu Background Section */}
      <section className='menu-bg d-flex justify-content-center align-items-center'>
        <h1 className='poppins-medium text-white'>Menu</h1>
      </section>

      {/* Menu Image First Section */}
      <section className='bg-white menu-img-sec'>
        <div className="container p-0">
          <div className="row m-0">
            <h1 className='my-4 text-center poppins-bold text-success'>BREAKFAST</h1>
            <div className="col-12 col-lg-6 order-2 order-lg-1 p-0 d-flex justify-content-center align-items-center">
              <MenuImgSec border='4px solid black' data='https://reactclonerestaurant.vercel.app/static/media/breakfast.9b746bb111d398b164f1.jpg' />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 p-0 d-flex justify-content-center align-items-center">
              <MenuListSec index={0} isWhite={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Image Second Section */}
      <section className='bg-black mt-5 menu-img-sec'>
        <div className="container p-0">
          <div className="row m-0">
            <h1 className='my-4 text-center poppins-bold text-success'>LUNCH</h1>
            <div className="col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center">
              <MenuListSec index={1} isWhite={true} />
            </div>
            <div className="col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center">
              <MenuImgSec border='4px solid white' data='https://reactclonerestaurant.vercel.app/static/media/lunch.b823e90ee2b8364c6191.jpg' />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Image Third Section */}
      <section className='bg-white mt-5 menu-img-sec'>
        <div className="container p-0">
          <div className="row m-0">
            <h1 className='my-4 text-center poppins-bold text-success'>DINNER</h1>
            <div className="col-12 col-lg-6 order-2 order-lg-1 p-0 d-flex justify-content-center align-items-center">
              <MenuImgSec border='4px solid black' data='https://reactclonerestaurant.vercel.app/static/media/dinner.15e20c686658b83d2f47.jpg' />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 p-0 d-flex justify-content-center align-items-center">
              <MenuListSec index={2} isWhite={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Image Fourth Section */}
      <section className='bg-black mt-5 menu-img-sec'>
        <div className="container p-0">
          <div className="row m-0">
            <h1 className='my-4 text-center poppins-bold text-success'>DESSERT</h1>
            <div className="col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center">
              <MenuListSec index={2} isWhite={true} />
            </div>
            <div className="col-12 col-lg-6 p-0 d-flex justify-content-center align-items-center">
              <MenuImgSec border='4px solid white' data='https://reactclonerestaurant.vercel.app/static/media/dessert.d8b55a4739399e30b6c9.jpg' />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </>
  )
}
