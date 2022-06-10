import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Setting from '../Setting';
import { dataContext } from '../Contexts/FetchData';


function SinglePost() {

    const { posts, authors,  categories } = useContext(dataContext);

    const { slug } = useParams();
    const [post, setPost] = useState()

    useEffect(() => {
        fetch(Setting.singlePost + slug)
            .then(res => res.json())
            .then(data => {
                setPost(data[0])
            })
        


    }, [])

    let category = categories === undefined ? "" : categories.filter(category => category.id === post.category_id)[0].title  
    let author = authors === undefined ? "" : authors.filter(author => author.id === post.author_id)[0]

    
    return (
        (!post ? "no post" : 
        
                
            <div className="col-lg-8" style={{paddingTop: "50px"}}>
                <article className="vlt-single-post vlt-single-post--style-4">
                    <header className="vlt-single-post__header">
                        <h2 className="vlt-post-title">{post.title}</h2>
                        <div className="vlt-post-meta"><span>{post.published_date.split("T")[0]}</span><span>{category}</span></div>
                    </header>
                    <div className="vlt-single-post__content">
                            <p>{post.body}</p>
                        
                        <div className="vlt-gap-70"></div>
                    </div>
                    
                    {/* <!--About author--> */}
                    <div className="vlt-about-author">
                        <div className="vlt-about-author__avatar">
                            <a href="#">
                                <img src={`${Setting.mediaUrl}${author.pic}`} alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="vlt-about-author__content">
                                <h5 className="vlt-about-author__title">{author.name}</h5>
                                <p className="vlt-about-author__text">{author.description}</p>
                            {/* <!--Button--> */}
                            {/* <a className="vlt-btn vlt-btn--secondary vlt-btn--sm" href="#" target="_self">Author posts</a> */}
                        </div>
                    </div>
                </article>
            </div> 
        
            )   
    )
}

export default SinglePost;