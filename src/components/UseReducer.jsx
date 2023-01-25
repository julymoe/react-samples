import { NavLink } from 'react-router-dom'

function UseReducer() {
  return (
    <div>
        <nav className="flex justify-center gap-4 py-5">
          <NavLink to="/UseReducer1">useReducer1</NavLink>
          <NavLink to="/UseReducer2">useReducer2</NavLink>        
          <NavLink to="/UseReducer3">useReducer3</NavLink>        
          <NavLink to="/UseReducer4">useReducer4</NavLink>        
        </nav>

        <h1>UseReducer Examples</h1>
    </div>
  )
}

export default UseReducer