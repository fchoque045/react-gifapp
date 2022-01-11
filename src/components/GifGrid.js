//import React, { useState, useEffect }from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         //.then( imgs => setImages(imgs))
    //         .then(setImages);
    // }, [category]);
    //si la categoria cambia va a voler a ejecutar lo de arriba
 
    //usando el custom hook
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {/* { loading ? 'Cargando...' : 'Data cargada'} */}
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                { 
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        /> 
                    ))
                }
            </div>
        </>
    )
}
