import './App.css'
import Header from './components/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import ArticleById from './components/ArticleById'
import Topics from './components/Topics'
import Users from './components/Users'
import RouteNotFound from './components/RouteNotFound'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/:topic" element={<Topics />} />
            <Route path="/articles/:article_id" element={<ArticleById />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
