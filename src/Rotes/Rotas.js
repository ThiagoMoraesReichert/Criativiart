import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Page/Login/login"
import Home from "../Page/Home/home"
import Register from "../Page/Register/register"
import Config from "../Page/Config/config"
import Profile from "../Page/Profile/profile"
import Chat from "../Page/Chat/chat"
import Inicio from "../Page/Inicio/inicio"


function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Register/>}/>
            <Route path="/configuracao" element={<Config/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas