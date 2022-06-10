import React, { useState, useEffect } from 'react';
import Blog from './Blog'; 
import Post from './Post';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { dataContext } from '../Contexts/FetchData';
import Setting from '../Setting';


function App() {
  const [posts, setPosts] = useState()
  const [authors, setAuthors] = useState()
  const [categories, setCategories] = useState()

  useEffect(() => {
      
      fetch(Setting.url)
      .then(res => res.json())
          .then(data => setPosts(data))
 
      fetch(Setting.authorsUrl)
      .then(res => res.json())
          .then(data => setAuthors(data))
      
      fetch(Setting.categoriesUrl)
      .then(res => res.json())
          .then(data => setCategories(data))
  }, [])

  return (
    <Router>
      <div className="App">
        <div className="content">
        <dataContext.Provider value={{ posts: posts, authors: authors, categories: categories}}>
          <Routes>              
              <Route exact path="/Blog" element = {<Blog/>} />
              <Route exact path="/Post/:slug" element={<Post />} />
            </Routes>
            </dataContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
