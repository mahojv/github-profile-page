import React from 'react'
import CardProject from './CardProject'
import useData from "../hooks/useData"

export default function BoxProjects({ rep ,show }) {

    const { loading, error, array } = useData(rep)
    const response = array

    return (
        <div  className='mt-[36px] flex flex-col justify-center  gap-10 md:grid  md:grid-cols-2 '>

            {loading &&
                <p>Cargando...</p>
            }

    

            {Array.isArray(response) && response.length > 0 &&

                response.map((project, index) => {

                    let cardsShow = show?  response.length : 4

                    if(index < cardsShow){
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

                    }
                    
                })
            }
        </div>
    )
}
