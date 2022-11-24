import React, { StrictMode, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup"
import "bootstrap/dist/css/bootstrap.min.css"
import { confirmAlert } from 'react-confirm-alert'
const Employees = () => {

    const EmployeesList = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        age: ""
    })
    const [employeesList, setEmployeesList] = useState(EmployeesList)
    const [mode, setMode] = useState({
        status: "add",
        action: "Add"
    })
    const { state } = useLocation()
    const navigate = useNavigate()
    const employeeSchema = Yup.object().shape({
        id: Yup.string().required(),
        name: Yup.string().required(),
        age: Yup.string().required()
    })

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }
    const handleSubmit = (value) => {
        if (mode.status === "add") {
            employeesList.unshift(value)
            setEmployeesList([...employeesList])
            setEmployee(
                {
                    id: "",
                    name: "",
                    age: ""
                }
            )
        } else if (mode.status === "edit") {
            employeesList[mode.selectedIndex] = value
            setEmployeesList([...employeesList])
            setMode({ status: "add", action: "Add" })
            setEmployee(
                {
                    id: "",
                    name: "",
                    age: ""
                })
        }
    }

    const handleEdit = (index) => {
        setMode({ status: "edit", action: "Save", selectedIndex: index });
        setEmployee({ ...employeesList[index] })
    }
    const handleDelete = (delIndex) => {
        confirmAlert({
            title: 'Delete employee',
            message: `Are you sure you want to delete ${employeesList[delIndex].name} ?`,
            buttons: [
                {
                    label: 'Cancel',
                },
                {
                    label: 'Delete',
                    onClick: () => {
                        setEmployeesList(employeesList.filter((value, index) => index !== delIndex))
                    }
                }
            ]
        })
    }

    const handleDetail = (index) => {
        console.log(employeesList[index]);
navigate("/EmployeeDetail", {state: employeesList[index]})
    }

    return (
        <div>
            <div className='container mt-4'>
                <div>
                    <Formik
                        initialValues={employee}
                        validationSchema={employeeSchema}
                        enableReinitialize={true}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <label htmlFor="id">Employee's id</label>
                            <br />
                            <Field name="id" value={employee.id} onChange={handleChange}></Field>
                            <ErrorMessage component="span" name='id'></ErrorMessage>
                            <br />
                            <label htmlFor="name">Employee's name</label>
                            <br />
                            <Field name="name" value={employee.name} onChange={handleChange}></Field>
                            <ErrorMessage component="span" name='name'></ErrorMessage>
                            <br />
                            <label htmlFor="age">Employee's age</label>
                            <br />
                            <Field name="age" value={employee.age} onChange={handleChange}></Field>
                            <ErrorMessage component="span" name='age'></ErrorMessage>
                            <br />
                            <Field className="mt-3" type="submit" value={mode.action}></Field>
                        </Form>
                    </Formik>
                </div>
                <hr />
                <table className='table-bordered w-50 text-center   '>
                    <thead>
                        <tr className=''>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesList.map((value, index) => (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td className=''>
                                    <button className='btn btn-dark' onClick={() => handleEdit(index)}>Edit</button>
                                    <button className='btn btn-danger mx-3' onClick={() => handleDelete(index)}>Delete</button>
                                    <button className='btn btn-info' onClick={() => handleDetail(index)}>Detail</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                <button className='mt-3 btn btn-primary' onClick={() => navigate(-1)}>Back</button>
        </div >

    )
}

export default Employees