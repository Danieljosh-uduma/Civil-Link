import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard/Dashboard"
import SideBar from "./components/SideBar/SideBar"
import './App.css'
import Directories from "./pages/Directories/Directories"
import OfficialDetail from "./pages/OfficialDetail/OfficialDetail"
import { createContext, useEffect, useState } from "react"
import { cardProps } from "./pages/Directories/Data"

export const AppContext = createContext<cardProps[]>([])

export default function App() {
  const [ directory, setDirectory ] = useState<cardProps[]>([])
  useEffect(() => {
    fetch('https://civiclink-iq2l.onrender.com/api/v1/admin/officials/iWiQugMOeme7gjOFsHc0UPvhkJGouMDCaeZQfLFD0fCIq0XWlCi4kuLmLPdUgEHb/')
      .then(res => res.json())
      .then(data => setDirectory(data.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <AppContext.Provider value={directory}>
    <BrowserRouter>
    <SideBar />
     
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/directory" element={<Directories />} />
        <Route path="/directory/:id" element={<OfficialDetail />} />
     </Routes>
     
    </BrowserRouter>
    </AppContext.Provider>
  )
}