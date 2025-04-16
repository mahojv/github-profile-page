import React from 'react'

export default function Modal() {
    return (
        <>

            <div className='z-50 w-[500px] hidden lg:flex items-center gap-4 bg-fondoCardBodyColor p-2 rounded-xl absolute top-21'>
                <figure className='w-[100px] overflow-hidden rounded-xl'>
                    <img className='object-cover w-full' src="./resources/github.png" alt="" /></figure>
                <div>
                    <h2>Github</h2>
                    <p>how people bluild software</p>
                </div>

            </div>

        </>
    )
}
