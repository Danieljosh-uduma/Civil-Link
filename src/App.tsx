// import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard/Dashboard"

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
     </Routes>
    </BrowserRouter>
  )
}