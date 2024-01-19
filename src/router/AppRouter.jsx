import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Login from "../pages/Login"
import Register from '../pages/Register'
import Navbar from '../components/Navbar'
import DashBoard from '../pages/DashBoard'
import { CssBaseline } from '@mui/material'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes> 
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
