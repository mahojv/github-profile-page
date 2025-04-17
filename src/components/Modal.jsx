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

    return (
        <>

            <div className='z-50 w-[500px] hidden lg:flex items-center gap-4 bg-fondoCardBodyColor p-2 rounded-xl absolute top-21' onClick={quickSearchSelect}>
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
