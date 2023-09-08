import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, useParams, useLocation, Navigate } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Routes>
        {/* <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />}></Route> */}
    </Routes>
    </div>
  )
}

export default App
