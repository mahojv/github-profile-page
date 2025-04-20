import React from 'react'
import useFecha from '../hooks/useFecha'

export default function CardProject({html_url, name, description, stars, mit, forks, update }) {

  const elapsed = useFecha(update)

  return (
    <a href={html_url} target='_blank' className='cursor-pointer '>
      <div  className=' rounded-lg repoCard  w-full   lg:max-w-none lg:max-h-none flex gap-3 flex-col px-[25px] justify-between lg:justify-center pt-[25px] py-[20px]  '>
        <h3 className='text-lg text-cardTextColor'>{name}</h3>
        <p className='text-sm' >{description}</p>

        <div className='flex gap-3 items-center text-cardTextColor' >

          {mit === "MIT" &&
            <span className='flex gap-1.5 text-sm items-center'>
              <figure className='size-6 w-[25px]'><img src="./resources/Chield_alt.svg" alt="" /></figure>
              <p>MIT</p>
            </span>
          }

          <span className='flex gap-1.5 text-sm items-center'>
            <figure  className='size-6 w-[25px]'><img src="./resources/Nesting.svg" alt="" /></figure>
            <p>{forks}</p>
          </span>
          <span className='flex gap-1.5 text-sm items-center'>
            <figure className='size-6 w-[25px]'><img src="./resources/Star.svg" alt="" /></figure>
            <p>{stars}</p>
          </span>
          <span>
            {elapsed <= 31 ? (
              <p className='text-[10px] text-center'>Updated {elapsed} days ago</p>
            ) : (
              <p className='text-[10px] text-center'>Updated more than a month ago</p>
            )}

          </span>
        </div>
      </div>
    </a>
  )
}
