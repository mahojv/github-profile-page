import React from 'react'

export default function useFecha(update) {

    const fechaString = update
    const fecha= new Date(fechaString)
    const timestamp = fecha.getTime()

    const actual = Date.now()


    const daysPassed  = Math.round((actual - timestamp ) / (86400000))



  return   daysPassed
   
}
