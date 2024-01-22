import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Login from "../pages/Login"
import Register from '../pages/Register'
import Navbar from '../components/Navbar'
import DashBoard from '../pages/DashBoard'
import { CssBaseline } from '@mui/material'
import PrivateRouter from './PrivateRouter'
import NewBlog from '../pages/NewBlog'
import Detail from '../pages/Detail'

const AppRouter = () => {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes> 
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-blog" element={<PrivateRouter />} >
          <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="/detail" element={<PrivateRouter />} >
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
