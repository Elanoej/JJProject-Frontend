import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Oficina from './pages/Oficina/Oficina'
import './App.css'
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Clients from "./pages/Clients/Clients";
import { ServiceOrderCreate } from "./components/ServiceOrderCreate/ServiceOrderCreate";

function App() {

  return (
    <div>
      <Header />
      <div className="body-app-div">
        <BrowserRouter>
          <Routes>
            <Route path="./" element={<Home />} />
            <Route path="./loja" element={<Shop />} />
            <Route path="./oficina" element={<Oficina />} />
            <Route path="./clientes" element={<Clients />}></Route>
            <Route path="./service-order-create" element={<ServiceOrderCreate />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  )
}

export default App
