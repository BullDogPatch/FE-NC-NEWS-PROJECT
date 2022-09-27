import './App.css'
import Header from './components/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import ArticleById from './components/ArticleById'
import Topics from './components/Topics'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/:topic" element={<Topics />} />
            <Route path="articles/:article_id" element={<ArticleById />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
