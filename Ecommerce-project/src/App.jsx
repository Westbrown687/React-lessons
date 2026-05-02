import { HomePage } from './Pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
     
      <Route path="checkout" element={<div>Test checkout page</div>} />
    </Routes>
  )
}

export default App
