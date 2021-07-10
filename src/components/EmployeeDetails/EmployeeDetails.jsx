import React, { useState } from 'react'
import michael from './michael.jpg'
import ian from './ian.jpg'
import ayo from './ayo.jpg'
import joseph from './joseph.jpg'
import './EmployeeDetails.css'

export default function EmployeeDetails() {
    const [emps,] = useState([
        {name:'michael', img:michael,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ex deleniti voluptas perferendis, minima dolore!'},
        {name:'ian', img:ian,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ex deleniti voluptas perferendis, minima dolore!'},
        {name:'ayo', img:ayo,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ex deleniti voluptas perferendis, minima dolore!'},
        {name:'joseph', img:joseph,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ex deleniti voluptas perferendis, minima dolore!'},
    ])
    return (
        <div className="main">
          
    {emps.map(emp=>{
        return (
            <div className="card" style={{width: '18rem'}}>
  <img src={emp.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title" style={{textTransform:'capitalize'}}>{emp.name}</h5>
    <p className="card-text">{emp.desc}</p>
  </div>
    </div>
        )
    })}
        </div> 
    )
}