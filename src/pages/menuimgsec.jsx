import React from 'react'

export default function MenuImgSec({ data, border }) {

    return (
        <img src={data} alt="Menu Image" className='w-75 h-75' style={{ border: border }} />
    )
}
