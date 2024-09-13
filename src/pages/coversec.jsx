import React from 'react'
import './pages.css'

export default function CoverSec({ menu }) {
    var data = () => {
        if (menu === "menu") {
            return (
                <section className='menu-bg d-flex justify-content-center 
                    align-items-center menu-bg-img'>
                    <h1 className='poppins-medium text-white'>Menu</h1>
                </section>
            )
        } else if (menu == "about") {
            return (
                <section className='menu-bg d-flex justify-content-center 
                    align-items-center about-bg-img'>
                    <h1 className='poppins-medium text-white'>About</h1>
                </section>
            )
        } else {
            return (
                <section className='menu-bg d-flex justify-content-center 
                    align-items-center contact-bg-img'>
                    <h1 className='poppins-medium text-white'>Contact</h1>
                </section>
            )
        }
    }

    return (
       <>
        {data()}
       </>
    )
}
