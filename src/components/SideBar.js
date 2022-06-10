
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Setting from '../Setting';
import { dataContext } from '../Contexts/FetchData';



function SideBar() {

    const { posts, authors, categories } = useContext(dataContext);

    
    
    return (



        <div className="col-lg-4">
            {/* Sidebar */}
            <div className="vlt-sidebar vlt-sidebar--right">

                {/* <!--search--> */}
                <div className="vlt-widget vlt-widget--search">
                    <form className="vlt-search-form">
                        <input type="text" placeholder="Search" />
                        <button>
                            <i className="icon-search-2"></i>
                        </button>
                    </form>
                </div>
        
                {/* categories */}
                <div className="vlt-widget vlt-widget--categories">
                    <h5 className="vlt-widget__title">Categories</h5>
                    <ul>
                        <li><a href="#">All Categories <span>(24)</span></a></li>
                        <li><a href="#">Business <span>(3)</span></a></li>
                        <li><a href="#">Design <span>(8)</span></a></li>
                        <li><a href="#">Lifestyle <span>(6)</span></a></li>
                        <li><a href="#">Company <span>(7)</span></a></li>
                    </ul>
                </div>

                {/* -recent post */}
                
                <div className="vlt-widget vlt-widget--recent-posts">
                    <h5 className="vlt-widget__title">Recent Posts</h5>

                    {posts.slice(-4).map((post, i) => { 
                        let category = categories.filter((category) => category.id === post.category_id)[0].title
                        return (
                        <div className="vlt-widget-post">
                        <div className="vlt-widget-post__thumbnail">
                            <a href={`post/${post.slug}`}>
                                <img src={`${Setting.mediaUrl}${post.pic}`} alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="vlt-widget-post__content">
                            <span>{post.published_date.split("T")[0]} </span><span>{category}</span>
                            <h5>
                                <a href="#">{post.title}</a>
                            </h5>
                        </div>
                            </div> 
                        )
    
                    }    
                    )}
                    
               
                    <div className="vlt-widget-post">
                        <div className="vlt-widget-post__thumbnail">
                            <a href="#">
                                <img src="/static/img/recent-posts-02.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="vlt-widget-post__content">
                            <span>13 Jan, 2020 / Company</span>
                            <h5>
                                <a href="#">Gathered say divided together above open or whose creeping.</a>
                            </h5>
                        </div>
                    </div>
                        
                    <div className="vlt-widget-post">
                        <div className="vlt-widget-post__thumbnail">
                            <a href="#">
                                <img src="/static/img/recent-posts-03.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="vlt-widget-post__content">
                            <span>09 Jan, 2020 / Lifestyle</span>
                            <h5>
                                <a href="#">Above lights abundantly fill, morning night give under said.</a>
                            </h5>
                        </div>
                    </div>
                       
                    <div className="vlt-widget-post">
                        <div className="vlt-widget-post__thumbnail">
                            <a href="#">
                                <img src="/static/img/recent-posts-04.png" alt="" loading="lazy" />
                                
                            </a>
                        </div>
                        <div className="vlt-widget-post__content">
                            <span>06 Jan, 2020 / Company</span>
                            <h5>
                                <a href="#">Created or abundantly brought called face have earth whales
                                    won't.</a>
                            </h5>
                        </div>
                    </div>
                </div>
            
            
                {/* Instagram post */}
                <div className="vlt-widget vlt-widget--instagram">
                    <h5 className="vlt-widget__title">Instagram</h5>
                    <div className="vlt-instagram-feed" data-columns="3">

                        <div>
                            <div className="vlt-instagram-item">
                                <img src="/static/img/instagram/image-01.png" alt="" loading="lazy" />
                                <a className="vlt-instagram-item__content" href="#">
                                    <span className="vlt-instagram-item__meta">
                                        <span><i className="icon-heart"></i> 147</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="vlt-instagram-item">
                                <img src="/static/img/instagram/image-02.png" alt="" loading="lazy" />
                                <a className="vlt-instagram-item__content" href="#">
                                    <span className="vlt-instagram-item__meta">
                                        <span><i className="icon-heart"></i> 65</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="vlt-instagram-item">
                                <img src="/static/img/instagram/image-03.png" alt="" loading="lazy" />
                                <a className="vlt-instagram-item__content" href="#">
                                    <span className="vlt-instagram-item__meta">
                                        <span><i className="icon-heart"></i> 24</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="vlt-instagram-item">
                                <img src="/static/img/instagram/image-04.png" alt="" loading="lazy" />
                                <a className="vlt-instagram-item__content" href="#">
                                    <span className="vlt-instagram-item__meta">
                                        <span><i className="icon-heart"></i> 38</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="vlt-instagram-item">
                                <img src="/static/img/instagram/image-05.png" alt="" loading="lazy" />
                                <a className="vlt-instagram-item__content" href="#">
                                    <span className="vlt-instagram-item__meta">
                                        <span><i className="icon-heart"></i> 44</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="vlt-instagram-item">
                                <img src="/static/img/instagram/image-06.png" alt="" loading="lazy" />
                                <a className="vlt-instagram-item__content" href="#">
                                    <span className="vlt-instagram-item__meta">
                                        <span><i className="icon-heart"></i> 65</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                            
                    </div>
                </div>
            </div>
        </div>
              
     
    )
}
export default SideBar;