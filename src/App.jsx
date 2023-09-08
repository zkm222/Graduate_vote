import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Show from './pages/show'
import Vote from './pages/vote'
import { Routes, Route, Link, useParams, useLocation, Navigate } from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/vote' />} />
        <Route path='/vote' element={<Vote />}></Route>
        <Route path='/show' element={<Show/>} />
      </Routes>
    </div>
  )
}

export default App
