import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container">
                    <a class="navbar-brand text-success poppins-bold" href="#">
                        <Link to={'/'} className='text-decoration-none text-success'>React Restaurant</Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item p-1">
                                <a class="nav-link poppins-regular">
                                    <Link to={'/'} className='text-decoration-none text-black'>HOME</Link>
                                </a>
                            </li>
                            <li class="nav-item p-1">
                                <a class="nav-link poppins-regular">
                                    <Link to={'/menu'} className='text-decoration-none text-black'>MENU</Link>
                                </a>
                            </li>
                            <li class="nav-item p-1">
                                <a class="nav-link poppins-regular">
                                    <Link to={'/about'} className='text-decoration-none text-black'>ABOUT</Link>
                                </a>
                            </li>
                            <li class="nav-item p-1">
                                <a class="nav-link poppins-regular">
                                    <Link to={'/contact'} className='text-decoration-none text-black'>CONTACT</Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
