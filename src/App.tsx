import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Main from "./pages/Main"

function App() {
  
  
  return (
    <>
    <div className="font-mon">

      <BrowserRouter basename="/prueba-tecnica-frontend-franklyn">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/main" Component={Main}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
