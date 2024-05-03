import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Oficina from './pages/Oficina/Oficina'
import './App.css'
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Clients from "./pages/Clients/Clients";
import { ServiceOrderCreate } from "./components/ServiceOrderCreate/ServiceOrderCreate";
import { Search } from "./pages/Search/Search";
import { useEffect, useRef, useState } from "react";

function App() {

  const [pathVariable, setPathVariable] = useState(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))

  return (
    <div>
      <Header />
      <div className="body-app-div">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search/*" element={<Search pathVariable={pathVariable} />}/>
            <Route path="/loja" element={<Shop />}/>
            <Route path="/oficina" element={<Oficina />}/>
            <Route path="/clientes" element={<Clients />}/>
            <Route path="/service-order-create" element={<ServiceOrderCreate />}/>
          </Routes>
        </HashRouter>
      </div>
      
    </div>
  )
}

export default App
