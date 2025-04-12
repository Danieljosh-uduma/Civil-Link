import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard/Dashboard"
import SideBar from "./components/SideBar/SideBar"
import './App.css'
import Directories from "./pages/Directories/Directories"
import OfficialDetail from "./pages/OfficialDetail/OfficialDetail"

export default function App() {
  return (
    <BrowserRouter>
    <SideBar />
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/directory" element={<Directories />} />
        <Route path="/directory/:title" element={<OfficialDetail />} />
        
     </Routes>
    </BrowserRouter>
  )
}