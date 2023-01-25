import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import UseReducer from "./components/UseReducer";
import UseReducer1 from "./components/UseReducer1";
import UseReducer2 from "./components/UseReducer2";
import UseReducer3 from "./components/UseReducer3";
import UseReducer4 from "./components/UseReducer4";


import { Home } from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <header>        
        <nav className="flex justify-center gap-4 py-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/UseReducer">useReducer</NavLink>

        </nav>
      </header>
      <div className="w-1/2 h-screen p-10 m-auto bg-slate-50">      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useReducer1" element={<UseReducer1 />} />
          <Route path="useReducer2" element={<UseReducer2 />} />
          <Route path="useReducer3" element={<UseReducer3 />} />
          <Route path="useReducer4" element={<UseReducer4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
