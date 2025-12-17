import { Link, Route, Routes } from "react-router-dom" 
import About from "./pages/About"
import Assignment from "./pages/Assignment"
import Home from "./pages/Home"

function App() {
  return (
    <>
      {/* <p className="read-the-docs">
          <Link to="/about"> About Page</Link>
          <Link to="/assignment"> Assignment Page</Link>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/assignment" element={<Assignment />} />
          </Routes>
      </p> */}
      <Home/>
    </>
  )
}

export default App
