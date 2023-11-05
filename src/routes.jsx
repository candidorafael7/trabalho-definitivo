import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import Contato from "./pages/Contato";

function AppRoutes(){
    return(
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/produtos" element={<Produtos />}></Route>
                <Route path="/carrinho" element={<Carrinho />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/contato" element={<Contato/>}></Route>

             </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes