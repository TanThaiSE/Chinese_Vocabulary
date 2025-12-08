import { Link, Route, Routes } from "react-router-dom" 
import About from "./pages/About"

function App() {
  return (
    <>
      <p className="read-the-docs">
          <Link to="/about"> About Page</Link>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
      </p>
    </>
  )
}

export default App
