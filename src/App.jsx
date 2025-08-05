import { Route,Routes } from 'react-router-dom'
import React from 'react'
import Home from './page/Home'
import Appoinment from './page/Appoinment'
import Chat from './page/Chat'
import PatientDetails from './page/PatientDetails'
import Blog from './page/Blog'


const App = () => {
  return (
    <div className='t'>
      <date/>
      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='Appoinment' element={<Appoinment /> }></Route>
        <Route path='Blog' element={<Blog /> }></Route>
        <Route path='Chat' element={<Chat /> }></Route>
        <Route path='PatientDetails' element={<PatientDetails /> }></Route>
      </Routes>


    </div>
  )
}

export default App

