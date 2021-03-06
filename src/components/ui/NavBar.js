import { Link, NavLink, useHistory } from "react-router-dom";
import {useContext} from "react"
import {AuthContext} from "../auth/AuthContext"
import {types} from "../types/types"

const Navbar = () => {

  const {user:{name},dispatch} = useContext(AuthContext)

  const history = useHistory()


  const handleLogOut = ()=>{

    history.replace("/login")

    dispatch({
      type : types.logout
    })

  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
      
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">

          <button
          onClick={handleLogOut}
            className="nav-item nav-link btn"
          >
            Logout
          </button>

          <span className="nav-item nav-lik text-info mt-2">{name}</span>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
