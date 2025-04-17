import React from 'react'

export default function Modal({img,name,bio}) {
    
    return (
        <>

            <div className='z-50 w-[500px] hidden lg:flex items-center gap-4 bg-fondoCardBodyColor p-2 rounded-xl absolute top-21'>
                <figure className='w-[100px] overflow-hidden rounded-xl'>
                    <img className='object-cover w-full' src={img} alt="" /></figure>
                <div>
                    <h2>{name}</h2>
                    <p>{bio}</p>
                </div>

            </div>

        </>
    )
}
