import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './Login'
import Home from './Home';
import Employees from './Employees';
import EmployeeDetails from './EmployeeDetail';

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        {/* <Route  path='/Home' element={<Home/>}/> */}
        <Route  path='/Employees' element={<Employees/>}/>
        <Route  path='/EmployeeDetail' element={<EmployeeDetails/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Main