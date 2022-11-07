import React from 'react';
import './style.css'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Article from './components/Articles';
import Educations from './components/Educations';
import Notfound from './components/404';
import Portfolyo from './components/Portfolyo';
import Contact from './components/Contact';


class BlogApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />}/>

          <Route path="/about" element={<About />} />

          <Route path="/articles" element={<Article />} />

          <Route path="/educations" element={<Educations />} />

          <Route path="/portfolio" element={<Portfolyo />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Notfound />} />

        </Routes>

        <Footer />
      </div>
    );
  }
}

export default BlogApp;
