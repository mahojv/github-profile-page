import React from 'react'
import CardProject from './CardProject'
import useData from "../hooks/useData"

export default function BoxProjects({ rep }) {

    const { loading, error, array } = useData(rep)
    const response = array

    return (
        <div role='card section' className='mt-9 flex flex-col justify-center items-center gap-10 sm:grid  sm:grid-cols-2'>

            {loading &&
                <p>Cargando...</p>
            }

    

            {Array.isArray(response) && response.length > 0 &&

                response.map((project) => {
                    return (
                        <CardProject
                            key={project.id}
                            html_url={project.html_url}
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
