import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Home = () => {
  const {state}= useLocation()
  const navigate = useNavigate()
  return (
    <div>
      <p>Sign in account'email is:{state.account}</p>
      <p>Sign in account'password is:{state.password}</p>
      <button onClick={()=>navigate(-1)}>Back</button>
    </div>

  )
}

export default Home