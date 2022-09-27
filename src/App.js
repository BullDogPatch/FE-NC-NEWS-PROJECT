import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import ArticleById from './components/ArticleById'
import Topics from './components/Topics'
// import { getArticleById } from './utils/api'
// console.log(getArticleById(4))

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/:topic" element={<Topics />} />
        <Route path="articles/:article_id" element={<ArticleById />} />
      </Routes>
    </div>
  )
}

export default App
