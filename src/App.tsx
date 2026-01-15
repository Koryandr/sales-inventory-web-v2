import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>

      <Navbar/>
    </>
  )
}

export default App