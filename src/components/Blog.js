import React from 'react';
import Vlt from './VltPage';
import Article from './Articles';
import Arrow from './Arrow';


function Blog() {

  return (
    <div>
      <main className="vlt-main"> 
        <div className="vlt-page-content">
          <Vlt /> 
          <div id="content"></div> 
          <Article />
          <Arrow/>
        </div>
        <div className="vlt-gap-100"></div>
      </main>

      
    </div>
  );
}

export default Blog;