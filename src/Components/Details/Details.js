import React from 'react';
import './Details.css'

const Details = (props) => {
    console.log(props);
    const { gender, salary, email, } = props.details;
    // const {image} = props.details.picture.large;
    const { title, first, last } = props.details.name;
    return (
        <div className='area'>
            <div className="details-area">
                <h3>Name: {title + ' ' + first + ' ' + last}</h3>
                <h4>Gender: {gender}</h4>
                <h4>Email: {email}</h4>
                <h4>Salary: ${salary}</h4>
                

            </div>
            <div className="image-area">
                <img src={props.details.picture.large} alt="" />
                <br/>
                <button onClick={() => props.handleAddSalary(props.details)}>Add Salary</button>
            </div>
        </div>
    );
};

export default Details;