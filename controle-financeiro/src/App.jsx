import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import CriarConta from './pages/CriarConta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Inicio}/>
        <Route path='/login'/>
        <Route path='/criar-conta' Component={CriarConta}/>
        <Route path='/painel'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
