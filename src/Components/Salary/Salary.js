import React from 'react';

const Salary = (props) => {
    const salary = props.salary;
    const total = salary.reduce((total, name) => total + name.salary, 0);
    return (
        <div>
            <h2>Total Salary Calculator</h2>
            <h3>Person Added : {salary.length} </h3>
            <h3>Total Salary : ${total}</h3>
        </div>
    );
};

export default Salary;