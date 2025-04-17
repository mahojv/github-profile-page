import React, { useState } from 'react'
import Modal from './components/modal'
import useData from "./hooks/useData";
import BoxProjects from './components/BoxProjects';

export default function App() {

  const [search, setSearch] = useState("github")
  const [quickSearch, setQuickSearch] = useState("github")
  // const [select, setSelect] = useData("")


  let url = `https://api.github.com/users/${search}`

  const { loading, error, array } = useData(url)
  const [toggle, setToggle] = useState(false)

  const response = array

  function handleKeyDown(e) {
    if (e.key === "Enter") {

      setSearch(e.target.value)
      setToggle(false)
    }

  }
  function closeModal() {
    setToggle(false)
  }
  function toggleFunction() {
    setToggle(true)
  }

  function quickSearchFunction(e) {

    setQuickSearch(e.target.value)
  }

  return (

    <div >

      <div className='z-0 w-full h-[190px]  flex flex-col items-center relative'>
        <div role='header' className='w-full'>
          <figure role='imagen encabezado' className=' h-[230px] absolute w-full overflow-hidden' onClick={closeModal}>
            <img className='object-cover  h-full w-full' src="./resources/hero-image-github-profile.jpg" alt="" />
          </figure>
        </div>
        <div className=' z-40  w-[500px] h-[50px] rounded-xl bg-fondoGrisColor flex items-center gap-4 mt-6 px-4  ' role='search'>
          <figure><img src="./resources/Search.svg" alt="" /></figure>
          <input className='placeholder:text-cardTextColor w-full h-full text-cardTextColor' type="text" placeholder='Username' onKeyDown={handleKeyDown} onClick={toggleFunction} onChange={quickSearchFunction} />
        </div>

        {toggle === true &&
          <Modal
            quickSearch={quickSearch}
            setSearch={setSearch}
            setToggle={setToggle}
          />
        }

      </div>

      <main className='px-7 flex flex-col grow' onClick={closeModal}>
        <div className=' flex flex-col lg:flex-row lg:items-center  gap-11'>

          <div className=' z-50 w-[120px] h-[120px] rounded-xl bg-fondoGrisColor flex justify-center items-center'>
            <figure role='profile img ' className='w-[100px] overflow-hidden rounded-xl'>
              <img src={response?.avatar_url} alt="" className='object-cover ' />
            </figure>
          </div>

          <div role='infContainer' className='flex flex-wrap gap-4 lg:mt-9'>

            <div className='bg-fondoCardBodyColor flex  gap-3 w-fit h-[50px] items-center justify-center rounded-xl  '>
              <div className='border-r border-white text-center flex justify-center  px-4 '>
                <p  > followers</p>
              </div>
              <p className='  text-center flex justify-center  px-4 ' > {response?.followers}</p>

            </div>

            <div className='bg-fondoCardBodyColor flex  gap-3 w-fit h-[50px] items-center justify-center rounded-xl  '>
              <div className='border-r border-white text-center flex justify-center  px-4 '>
                <p  > folowing</p>
              </div>
              <p className='  text-center flex justify-center  px-4 ' > {response?.following}</p>

            </div>

            <div className='bg-fondoCardBodyColor flex  gap-3 w-fit h-[50px] items-center justify-center rounded-xl  '>
              <div className='border-r border-white text-center flex justify-center  px-4 '>
                <p  > location</p>
              </div>
              <p className='  text-center flex justify-center  px-4 ' > {response?.location}</p>
            </div>
          </div>
        </div>

        <div>
          <div className='mt-9 text-cardTextColor'>
            <h1 className='text-4xl '>{response?.name}</h1>
            <h2 >{response?.bio}</h2>
          </div>


          <BoxProjects
            rep={response?.repos_url}
          />

        </div>


      </main>
      <footer className='mt-10 flex justify-center items-center py-6 '>
        <a className='text-cardTextColor' href={response?.html_url} target='_blank' >view all repositories</a>
      </footer>

    </div>
  )
}
