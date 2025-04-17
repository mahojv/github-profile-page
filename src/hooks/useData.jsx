import React, {useEffect, useState } from 'react'
import axios from 'axios';

/**
 * Hook para obtener un array atraves de un url (API)
 *
 * @export
 * @param {*} url Url modificada de acuerdo a lo que se busca obtener
 * @returns {{ loading: boolean (estado de solicitud); error: string (mensaje de error); response: array (resultados de consulta); }} 
 */
export default function setData(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [array, setArray] = useState(null);

    async function getData() {
        try {
            setLoading(true)
            const { data } = await axios.get(url)
            setArray(data)

        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()

    }, [url])

    return {
        loading,
        error,
        array
    }
}
