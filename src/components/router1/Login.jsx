import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
  const [user, setUser] = useState(
    {
      account: "",
      password: "",
    }
  )
  const loginSchema = Yup.object().shape({
    account: Yup.string().email().required(),
    password: Yup.string().min(6).required()
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    const isValid = user.account==="admin@gmail.com" && user.password==="letmein"
    if(isValid){
      // navigate("/Home", {state:user})
      navigate("/Employees", {state:user})
    }
    else{
      alert("Something went wrong, please try again")
      setUser({
        account: "",
        password: "",
      })
    }
  }

  return (
    <div className='container'>
      <Formik initialValues={user}
        enableReinitialize={true}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor='account'>Email</label>
          <br />
          <Field name="account" value={user.account} placeholder="Enter your email"
            onChange={handleChange}>
          </Field>
          <ErrorMessage component="span" name='account' />
          <br />
          <label htmlFor='password'>Password</label>
          <br />
          <Field type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}>
          </Field>
          <ErrorMessage component="span" name='password' />
          <br />
          <button type='submit' className='btn btn-info mt-2'>Sign in</button>
        </Form>
      </Formik>
    </div>
  )
  
}

export default Login