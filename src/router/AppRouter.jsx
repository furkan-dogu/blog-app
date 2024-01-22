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
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import MyBlog from '../pages/MyBlog'
import Profile from '../pages/Profile'

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
        <Route path="/about" element={<About />} />
        <Route path="/my-blogs" element={<MyBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
