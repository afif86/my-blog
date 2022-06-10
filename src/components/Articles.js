import React, { useEffect, useState } from 'react';
import Setting from '../Setting';
import { dataContext } from '../Contexts/FetchData';
import { useContext } from 'react';


 
function Article() {
   
    const { posts, authors, categories } = useContext(dataContext);

    
   
    return (

    <div>
        <div className="vlt-gap-120"></div>
        <div className="container">
            {/* <div className="vlt-gap-90"></div> */}
            <div className="vlt-isotope-grid" data-columns="2" data-layout="masonry" data-x-gap="30|30" data-y-gap="70|70" data-controls="#vlt-filter-blog-06" data-load-more-selector="#vlt-load-more-blog-06">
                <div className="grid-sizer"></div>
                    
                    {!posts ? 'no post' : posts.map(post => {
                                let category = categories.filter((category) => category.id === post.category_id)[0].title
                            
                            
                        
                        return (
                            <div key={post.id} className=" grid-item">
                                <article className="vlt-post vlt-post--style-2">
                            
                                    <div className="vlt-post__media">
                                        <a className="vlt-post__link" href={`post/${post.slug}`}> </a>
                                                <img src={`${Setting.mediaUrl}${post.pic}`} alt="" loading="lazy" />
                                                
                                    </div>
                                    <div className="vlt-post__content">
                                        <header className="vlt-post__header">
                                            <div className="vlt-post-meta">
                                                <span>{post.published_date.split("T")[0]}</span><span>{category}</span>
                                            </div>
                                            <h3 className="vlt-post-title">
                                                <a href={`post/${post.slug}`}>
                                                {post.title}</a>
                                            </h3>
                                        </header>
                                        <div className="vlt-post-excerpt">
                                            <p>{post.brief}</p>
                                        </div>
                                    </div>
                                </article>
                            </div> 
                        )
                })}	

                    
                    
                    
                </div>
                
        </div>
            <div className="vlt-gap-120"></div>
            <div className="vlt-gap-120"></div>
    </div>
  );
}

export default Article;