import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Articles from './components/Articles'
import Topics from './components/Topics'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic" element={<Topics />} />
      </Routes>
      <Articles />
    </div>
  )
}

export default App
