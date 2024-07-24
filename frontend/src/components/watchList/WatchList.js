import React from 'react'
import './WatchList.css'

export const WatchList = ({movies}) => {
  return (
    <>
     <div className='yes'>
     {
                movies?.map((movie)=>{
                return(
                  
                        <div className='movie-card-containers'>
                            <div className='movie-cards' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className='movie-details'>
                                    <div className='movie-posters'>
                                        <img src={movie.poster} alt='' />
                                    </div>
                                    <div className='movie-titles'>
                                        <h5>{movie.title}</h5>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                

               
                    )
                     
                })
            }
     </div>
    </>
  )
}
