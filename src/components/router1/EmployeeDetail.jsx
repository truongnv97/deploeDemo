import React from 'react'
import { useLocation } from 'react-router-dom';

const EmployeeDetails = () => {
    const { state } = useLocation();
    return (
        <div className='container mt-3'>
            <p>Employee Details:</p>
            <div className='ms-5'>
                <p>
                    Id : {state.id}
                </p>
                <p>
                    Name : {state.name}
                </p>
                <p>
                    Age : {state.age}
                </p>
            </div>
        </div>
    )
}

export default EmployeeDetails;