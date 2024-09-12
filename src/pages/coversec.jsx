import React from 'react'
import './pages.css'

export default function CoverSec({title,isMenu}) {
    return (
        <section className={`menu-bg d-flex justify-content-center 
            align-items-center ${(isMenu) ? 'menu-bg-img': 'about-bg-img' }`}>
            <h1 className='poppins-medium text-white'>{title}</h1>
        </section>
    )
}
