// import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard/Dashboard"
import './App.css'
import Directories from "./pages/Directories/Directories"

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/directory" element={<Directories />} />
        
     </Routes>
    </BrowserRouter>
  )
}