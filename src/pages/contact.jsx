import React, { useState } from 'react'
import Header from '../common/header'
import CoverSec from './coversec'
import Review from './review'
import Footer from '../common/footer'
import AddresSsec from './addresssec'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  var [formData,updateFormData] = useState({
    'fname':'',
    'lname':'',
    'email':'',
    'phone':'',
    'date':'',
    'guest':'',
    'comment':''
  })

  let getValue = (event) => {
    let oldData = {...formData}
    let key = event.target.name
    let value = event.target.value
    oldData[key] = value
    updateFormData(oldData)
  }

  var getData = (event) => {
    event.preventDefault()
    toast.success("Succesfully Data Stored!")
    console.log(formData)
    
    updateFormData({
        'fname':'',
        'lname':'',
        'email':'',
        'phone':'',
        'date':'',
        'guest':'',
        'comment':''
      })
  }

  return (
    <>
      <Header />

      {/* Contact Background Section */}
      <CoverSec menu={'contact'} />


      {/* Cotact Form Section */}
      <section className='contact-find-sec sec-white mt-2 d-flex justify-content-center align-items-center'>
        <div className="container p-0 h-100">
          <div className="row m-0 h-100">
            <AddresSsec isWhite={false} />
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-0">
              <form class="row g-3" onSubmit={getData}>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="inputEmail4" 
                  onChange={getValue} name='fname' value={formData.fname} />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Last Name</label>
                  <input type="text" class="form-control" onChange={getValue} name='lname'
                   id="inputPassword4" value={formData.lname} />
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email Address</label>
                  <input type="email" class="form-control" onChange={getValue} name='email'
                   id="inputEmail4" value={formData.email} />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Phone Number</label>
                  <input type="number" class="form-control" onChange={getValue} name='phone' 
                  id="inputPassword4" value={formData.phone} />
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Date</label>
                  <input type="date" class="form-control" onChange={getValue} name='date'
                   id="inputEmail4" value={formData.date}/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Number Of Guests</label>
                  <input type="number" class="form-control" onChange={getValue} name='guest' 
                  id="inputPassword4" value={formData.guest}/>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Comments</label>
                  <input type="text" class="form-control" onChange={getValue} name='comment' 
                  id="inputAddress" value={formData.comment}/>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Review Component */}
      <Review color={'black'} txtColor={'white'} />

      {/* Footer Component */}
      <Footer />

      <ToastContainer />

    </>
  )
}
