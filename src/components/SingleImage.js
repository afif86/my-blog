
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Setting from '../Setting';
import { dataContext } from '../Contexts/FetchData';



function SingleImage() {
    // const { slug } = useParams();
    // const [post, setPost] = useState()


    // useEffect(() => {
    //     fetch(Setting.singlePost + slug)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPost(data[0])
    //         })

    // }, [])


    return (
               
         <div >
            <div className="container">
                <div className="vlt-post-media-title vlt-post-media-title--style-1 jarallax">
                    <img className="jarallax-img" src="../img/testimonia.png" alt="" />
                </div>
            </div>
        </div> 
        
    )
}

export default SingleImage;