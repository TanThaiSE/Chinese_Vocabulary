import { Route, Routes } from "react-router-dom" 
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Ex1 from "./pages/Ex1"
import Ex2 from "./pages/Ex2"
import Ex3 from "./pages/Ex3"
import Ex4 from "./pages/Ex4"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detail" element={<Detail/>} />
      <Route path="/exam1" element={<Ex1/>} />
      <Route path="/exam2" element={<Ex2/>} />
      <Route path="/exam3" element={<Ex3/>} />
      <Route path="/exam4" element={<Ex4/>} />
    </Routes>
  )
}

export default App
