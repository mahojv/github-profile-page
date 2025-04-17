import React from 'react'
import useFecha from '../hooks/useFecha'

export default function CardProject({html_url, name, description, stars, mit, forks, update }) {

  const elapsed = useFecha(update)

  return (
    <a href={html_url} target='_blank' className='cursor-pointer'>
      <div role='card' className=' rounded-lg repoCard w-full  flex gap-3 flex-col px-3 justify-center py-5 '>
        <h3 className='text-2xl text-cardTextColor'>{name}</h3>
        <p >{description}</p>

        <div className='flex gap-3' >

          {mit === "MIT" &&
            <span className='flex gap-1.5'>
              <figure><img src="./resources/Chield_alt.svg" alt="" /></figure>
              <p>MIT</p>
            </span>
          }

          <span className='flex gap-1.5'>
            <figure><img src="./resources/Nesting.svg" alt="" /></figure>
            <p>{forks}</p>
          </span>
          <span className='flex gap-1.5'>
            <figure><img src="./resources/Star.svg" alt="" /></figure>
            <p>{stars}</p>
          </span>
          <span>
            {elapsed <= 31 ? (
              <p>Updated {elapsed} days ago</p>
            ) : (
              <p>Updated more than a month ago</p>
            )}

          </span>
        </div>
      </div>
    </a>
  )
}
