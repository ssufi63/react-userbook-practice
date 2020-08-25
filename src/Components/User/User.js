import React, { useState } from 'react';
import './User.css'
import users from '../../fakeData/users';
import Details from '../Details/Details';
import Salary from '../Salary/Salary';

const User = () => {
    const [names, setNames] = useState(users);
    const [salary, setSalary] = useState([]);

    const handleAddSalary = (details) => {
        const newSalary = [...salary, details];
        setSalary(newSalary);
    }
    return (
        <div className='userSalary-area'>
            <div className="user-area">
                {
                    names.map(name => <Details
                        handleAddSalary={handleAddSalary}
                        details={name}></Details>)
                }
            </div>
            <div className="salary-area">
               <Salary salary = {salary}></Salary>
            </div>

        </div>
    );
};

export default User;