import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import HomePage from '../components/HomePage'
import OemPage from '../components/OemPage'
import SingleCarPage from '../components/SingleCarPage'
import RegisterForm from '../components/RegisterForm'
import AddCarPage from '../components/AddCarPage'
import AdminSection from '../components/AdminSection'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<RegisterForm />} />
        <Route path='/oempage' element={<OemPage />} />
        <Route path='/addcarpage' element={<AddCarPage />} />
        <Route path='/adminsection' element={<AdminSection />} />
        <Route path='/singlecarpage/:id' element={<SingleCarPage />} />
        <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Allroutes