import React from 'react'
import CardProject from './CardProject'
import useData from "../hooks/useData"

export default function BoxProjects({ rep }) {

    const { loading, error, array } = useData(rep)
    const response = array

   







    return (
        <div role='card section' className='mt-9 flex flex-col items-center gap-10 lg:grid  lg:grid-cols-2'>

            {loading && <p>Cargando...</p>}


            {error && <p>Error: {error.message}</p>}

            {Array.isArray(response) && response.length > 0  &&

                response.map((project) => {
                    return (
                        <CardProject
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            stars={project.stargazers_count}
                            mit={project?.license?.spdx_id}
                            forks={project.forks}
                            update={project.updated_at}


                        />
                    )
                })

                

            }

            








        </div>
    )
}
