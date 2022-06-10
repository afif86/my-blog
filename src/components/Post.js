import React, {useContext} from 'react';
import SinglePost from './SinglePost';
import { dataContext } from '../Contexts/FetchData';
import SideBar from './SideBar';
import SingleImage from './SingleImage';

function Post() {
    // const categories = useContext(dataContext);
    // console.log("herreeeee", categories)

    return (
<div>
        <div className="vlt-site-overlay"></div>
        <div className="vlt-page-content vlt-page-content--padding">
      
            <section>
                <div className="container">
                    <div>
                        <SingleImage />
                        <div className="row singlepost_row">
                            <SinglePost />  
                            <SideBar/>
                        </div>
                            
                    </div>
                </div>
            </section>
        </div>
             
    </div>
    )
}

export default Post;