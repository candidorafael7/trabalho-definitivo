import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos/produtos";
import Carrinho from "./pages/Carrinho/carrinho";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro/cadastro";
import Contato from "./pages/Contato";
import Admin from "./pages/Admin/admin";
import ApiProdutos from "./crud/ApiProdutos";
import Add from "./crud/add";
import Atualizar from "./crud/Atualizar";

function AppRoutes(){
    return(
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/produtos" element={<Produtos />}></Route>
                <Route path="/carrinho/:id" element={<Carrinho />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/admin" element={<ApiProdutos/>}></Route>
                <Route path="/criar" element={<Add/>}></Route>
                <Route path="/atualizar/id:" element={<Atualizar/>}></Route>

             </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes