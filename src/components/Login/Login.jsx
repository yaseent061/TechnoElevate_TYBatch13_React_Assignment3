import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import loginContext from '../context/loginContext'


export default function Login() {
    const context = useContext(loginContext)
    const history = useHistory()
    function submit(e){
        e.preventDefault()
        context.log()
        history.push('/')
    }
    return (
        
        <div className="container" style={{marginTop:"10%"}}>
           <form onSubmit={(e)=>submit(e)}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember me </label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form> 
        </div>
    
    )
}
