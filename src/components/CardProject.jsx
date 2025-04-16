import React from 'react'

export default function CardProject() {
  return (
    <>
      <div role='card' className=' rounded-lg repoCard w-full  flex gap-3 flex-col px-3 justify-center py-5 '>
              <h3 className='text-2xl text-cardTextColor'>.github</h3>
              <p >community healt files from the girhub org</p>
              <div className='flex gap-3' >
                <span className='flex gap-1.5'>
                  <figure><img src="./resources/Chield_alt.svg" alt="" /></figure>
                  <p>MIT</p>
                </span>
                <span className='flex gap-1.5'>
                  <figure><img src="./resources/Nesting.svg" alt="" /></figure>
                  <p>2,369</p>
                </span>
                <span className='flex gap-1.5'>
                  <figure><img src="./resources/Star.svg" alt="" /></figure>
                  <p>50</p>
                </span>
                <span>

                  <p> updated 4 days ago</p>
                </span>
              </div>
            </div>
    </>
  )
}
