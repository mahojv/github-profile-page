import React from 'react'
import Modal from './components/modal'
import CardProject from './components/CardProject'

export default function App() {
  return (
    <div>

      <div className='z-0 w-full h-[190px]  flex flex-col items-center relative'>
        <div role='header' className='w-full'>
          <figure role='imagen encabezado' className=' h-[230px] absolute w-full overflow-hidden'>
            <img className='object-cover  h-full w-full' src="./resources/hero-image-github-profile.jpg" alt="" />
          </figure>
        </div>
        <div className=' z-40  w-[500px] h-[50px] rounded-xl bg-fondoGrisColor flex items-center gap-4 mt-6 px-4  ' role='search'>
          <figure><img src="./resources/Search.svg" alt="" /></figure>
          <input className='placeholder:text-cardTextColor' type="text" placeholder='Username' />
        </div>


        <Modal />






      </div>




      <main className='px-7 flex flex-col grow'>
        <div className=' flex flex-col lg:flex-row lg:items-center  gap-11'>

          <div className=' z-50 w-[120px] h-[120px] rounded-xl bg-fondoGrisColor flex justify-center items-center'>
            <figure role='profile img ' className='w-[100px] overflow-hidden rounded-xl'>
              <img src="./resources/github.png" alt="" className='object-cover ' />
            </figure>
          </div>

          <div role='infContainer' className='flex flex-wrap gap-4 lg:mt-9'>

            <div className='bg-fondoCardBodyColor flex  gap-3 w-fit h-[50px] items-center justify-center rounded-xl  '>
              <div className='border-r border-white text-center flex justify-center  px-4 '>
                <p  > followers</p>
              </div>
              <p className='  text-center flex justify-center  px-4 ' > 27839</p>

            </div>

            <div className='bg-fondoCardBodyColor flex  gap-3 w-fit h-[50px] items-center justify-center rounded-xl  '>
              <div className='border-r border-white text-center flex justify-center  px-4 '>
                <p  > folowing</p>
              </div>
              <p className='  text-center flex justify-center  px-4 ' > 0</p>

            </div>

            <div className='bg-fondoCardBodyColor flex  gap-3 w-fit h-[50px] items-center justify-center rounded-xl  '>
              <div className='border-r border-white text-center flex justify-center  px-4 '>
                <p  > location</p>
              </div>
              <p className='  text-center flex justify-center  px-4 ' > san francisco, ca</p>

            </div>

          </div>

        </div>

        <div>
          <div className='mt-9 text-cardTextColor'>
            <h1 className='text-4xl '>Github</h1>
            <h2 >how people bluild software</h2>
          </div>


          <div role='card section' className='mt-9 flex flex-col items-center gap-10 lg:grid  lg:grid-cols-2'>


            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />


          </div>









        </div>







      </main>
      <footer className='mt-10 flex justify-center items-center py-6 '>
        <p className='text-cardTextColor' >view all repositories</p>
      </footer>



    </div>
  )
}
