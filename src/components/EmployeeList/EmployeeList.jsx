import React, { useState } from 'react'
import './EmployeeList.css'

export default function EmployeeList() {
    const [employees,] = useState([
        {empId:'TY01',name:"ARJUN",desig:'SSD',sal:'40000'},
        {empId:'TY02',name:"PRASHANT",desig:'HR',sal:'60000'},
        {empId:'TY03',name:"VIJAY",desig:'SSD',sal:'50000'},
        {empId:'TY04',name:"KIRAN",desig:'HR',sal:'40000'},
    ])
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee ID</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
      {employees.map((emp,i) =>{
          return (<tr key={i}>
              <th scope="row" >{i+1}</th>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.desig}</td>
              <td>{emp.sal}</td>
          </tr>)
      })}
  
  </tbody>
</table>       
    )
}
