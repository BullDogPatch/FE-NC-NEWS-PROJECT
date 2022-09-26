import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Articles from './components/Articles'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Articles />
    </div>
  )
}

export default App
