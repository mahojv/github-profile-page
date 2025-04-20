import React from 'react'
import useData from "../hooks/useData"

export default function Modal({ quickSearch, setSearch, setToggle }) {

    let url = `https://api.github.com/users/${quickSearch}`

    const { loading, error, array } = useData(url)
    const response = array
    // console.log(response)

    function quickSearchSelect(e) {
        setSearch(response?.login)
        setToggle(false)
    }

    if(loading){
       
            return(

                
                <div class=" z-50 w-[500px] hidden lg:flex items-center gap-4 bg-fondoCardBodyColor p-2 rounded-xl absolute top-[94px] cursor-pointer ">
                <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
            </div>
            )

       
    }

    return (
        <>

            

            <div className='z-50 w-[500px] hidden lg:flex items-center gap-4 bg-fondoCardBodyColor p-2 rounded-xl absolute top-[94px] cursor-pointer' onClick={quickSearchSelect}>
                <figure className='w-[100px] overflow-hidden rounded-xl'>
                    <img className='object-cover w-full' src={response?.avatar_url} alt="" /></figure>
                <div>
                    <h2>{response?.name}</h2>
                    <p>{response?.bio}</p>
                </div>

            </div>

        </>
    )
}
