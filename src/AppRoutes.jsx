import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import App from './App'
const AppRoutes = () => {
  return (
    <>
        <Router>
            <Navbar />
            <Routes element={<Navbar />}>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppRoutes
