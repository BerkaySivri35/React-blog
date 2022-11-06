import React from 'react';
import './style.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Article from './components/Articles';
import Educations from './components/Educations';
import Notfound from './components/404';


class BlogApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        
        <Navbar />

        <Routes>
          <Route path="/main" element={<Main />}/>

          <Route path="/about" element={<About />} />

          <Route path="/articles" element={<Article />} />

          <Route path="/educations" element={<Educations />} />

          <Route path="*" element={<Notfound />} />

        </Routes>

        <Footer />
      </div>
    );
  }
}

export default BlogApp;
