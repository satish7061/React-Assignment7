import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppBar from './AppBar'
import AddData from './Component/AddData'
import EditData from './Component/EditData'
import ContactUs from './Pages/ContactUs'
import Home from './Pages/Home'
import Student from './Pages/Student'

export default function NavBar() {
  return (
    <>
    <BrowserRouter>
       <AppBar/>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/Student" element={ <Student/>} />
           <Route path="/Contact-us" element={<ContactUs/>} />
           <Route path="/addData" element={<AddData/>} />
           <Route path="/editData" element={<EditData/>} />
        </Routes>
    </BrowserRouter>
 </>
  )
}