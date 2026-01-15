import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Goods from './components/Goods'
import Analytics from './components/Analytics'
import Sales from './components/Sales'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Goods" element={<Goods />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Analytics" element={<Analytics />} />
      </Routes>
  <br/>
  <br/>
      <Navbar/>
    </>
  )
}

export default App