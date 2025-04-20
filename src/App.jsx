import React, { useState } from 'react'
import Modal from "./components/Modal";
import useData from "./hooks/useData";
import BoxProjects from './components/BoxProjects';

export default function App() {

  const [search, setSearch] = useState("github")
  const [quickSearch, setQuickSearch] = useState("github")
  const [show, setShow] = useState(false)
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

    setTimeout(() => {
      setQuickSearch(e.target.value)
    }, 1000);
    
  }

  function showMoreFunction() {
    setShow(!show)
  }

  return (

    <div >

      <div className='z-0 w-full h-[200px]  flex flex-col items-center relative'>
        <div  className='w-full'>
          <figure  className=' h-[240px] absolute w-full overflow-hidden' onClick={closeModal}>
            <img className='object-cover  h-full w-full' src="./resources/hero-image-github-profile.jpg" alt="" />
          </figure>
        </div>




        <div className=' z-40 min-w-[360px]  lg:w-[490px] h-[57px] rounded-lg bg-fondoGrisColor flex items-center gap-4 mt-[32px] px-4  ' >
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

      <main className='px-7 sm:px-[120px] flex flex-col grow' onClick={closeModal}>
        <div className=' flex flex-col lg:flex-row lg:items-center  gap-[24px]'>

          <div className=' z-50 w-[120px] h-[120px] rounded-xl bg-fondoGrisColor flex justify-center items-center'>
            <figure  className='w-[105px] overflow-hidden rounded-xl'>
              <img src={response?.avatar_url} alt="" className='object-cover ' />
            </figure>
          </div>

          <div  className='flex flex-wrap gap-[22px] lg:mt-9 text-sm font-medium '>

            <div className='bg-fondoCardBodyColor text-cardTextColor  flex  gap-3 w-fit h-[53px] items-center justify-center rounded-xl  '>
              <div className='border-r  border-bodyTextColor/50   text-center flex justify-center  px-[23px] h-[70%] items-center '>
                <p  > Followers</p>
              </div>
              <p className='  text-center flex justify-center pl-[13px] pr-[23px] ' > {response?.followers}</p>

            </div>

            <div className='bg-fondoCardBodyColor text-cardTextColor flex  gap-3 w-fit h-[53px] items-center justify-center rounded-xl  '>
              <div className='border-r border-bodyTextColor/50  text-center flex justify-center px-[23px] h-[70%] items-center '>
                <p  > Folowing</p>
              </div>
              <p className='  text-center flex justify-center  pl-[13px] pr-[23px] ' > {response?.following}</p>

            </div>

            <div className='bg-fondoCardBodyColor text-cardTextColor flex  gap-3 w-fit h-[53px] items-center justify-center rounded-xl  '>
              <div className='border-r border-bodyTextColor/50  text-center flex justify-center h-[70%] items-center   px-[23px] '>
                <p  > Location</p>  
              </div>
              <p className='  text-center flex justify-center  pl-[13px] pr-[23px] ' > {response?.location}</p>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='mt-[16px] text-cardTextColor'>
            <h1 className='text-[32px] '>{response?.name}</h1>
            <h2 className='mt-[2px] text-sm' >{response?.bio}</h2>
          </div>


          <BoxProjects
            rep={response?.repos_url}
            show={show}
          />

        </div>


      </main>
      <footer className='mt-10 flex justify-center items-center py-6 '>
        <button className='text-cardTextColor' onClick={showMoreFunction} > { show? "Show less"  : " View all repositories" }</button>
      </footer>

    </div>
  )
}
