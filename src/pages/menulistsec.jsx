import React from 'react'
import { menuData } from '../datas/menudata'
import './pages.css'

export default function MenuListSec({index,isWhite}) {
    console.log(isWhite)
    return (
            <div>
                <h2 className={`poppins-medium text-center ${(isWhite) ? 'white' : 'black'}`}>{menuData[index].title1}</h2>
                <p className={`poppins-regular text-center ${(isWhite) ? 'white' : 'black'}`}>{menuData[index].desc1}</p>
                <h1 className='poppins-bold text-success text-center'>{menuData[index].price1}</h1>

                <h2 className={`poppins-medium text-center mt-5 ${(isWhite) ? 'white' : 'black'}`}>{menuData[index].title2}</h2>
                <p className={`poppins-regular text-center ${(isWhite) ? 'white' : 'black'}`}>{menuData[index].desc1}</p>
                <h1 className='poppins-bold text-success text-center'>{menuData[index].price2}</h1>

                <h2 className={`poppins-medium text-center mt-5 ${(isWhite) ? 'white' : 'black'}`}>{menuData[index].title3}</h2>
                <p className={`poppins-regular text-center ${(isWhite) ? 'white' : 'black'}`}>{menuData[index].desc3}</p>
                <h1 className='poppins-bold text-success text-center'>{menuData[index].price3}</h1>
            </div>
    )
}
