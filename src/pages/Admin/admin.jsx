import Footer from "../../components/Footer";
import ApiProdutos from "../../crud/ApiProdutos";
import './admin.css';




function Admin(){
    return(
        <>
        <h1>Página do Administrador</h1>
        <ApiProdutos/>
        <Footer/>
        </>
    )
}

export default Admin;