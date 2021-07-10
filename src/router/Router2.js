import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import EmployeeDetails from "../components/EmployeeDetails/EmployeeDetails"
import EmployeeList from "../components/EmployeeList/EmployeeList"
import Home from "../components/Home/Home"
import Logout from "../components/Logout/Logout"

export const router2 = (
  <Router>
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Employee portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-link" to="/list">
              EmployeeList
            </Link>
            <Link className="nav-link" to="/details">
              EmployeeDetails
            </Link>
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />
      <Route path="/logout" component={Logout} />
      <Route path="/list" component={EmployeeList} />
      <Route path="/details" component={EmployeeDetails} />
    </Switch>
  </Router>
)
