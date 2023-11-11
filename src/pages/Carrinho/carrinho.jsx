import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import './carrinho.css'


function Carrinho(){
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/produtos/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        
        <>
        {/* Carrinho */}
        <div className="carrinho">
        <h1>Seus Produtos</h1> <br />
        <div className="img-carrinho">
        <img src={data.img}/>
        </div>

        <div className="text-carrinho">
        <h1>Nome do Produto</h1>
        <p>{data.nome}</p>
        <h1>Valor do Produto</h1>
        <p>R$ {data.valor},00</p>
        </div>
        </div>

        <br /><br /><br />

        {/* Formulário */}

        <form className="form">
        <h2>Preencha com os seus dados abaixo para finalizar a compra!</h2>
        <div className="formulário">
            <label >
                <h4>Nome:</h4>
                <input type="nome" placeholder="Digite seu nome " required/>
            </label>
        </div>
        <div>
            <label >
                <h4>Sobrenome:</h4>
                <input type="nome" placeholder="Digite seu sobrenome" required/>
            </label>
        </div>
        <div>
            <label >
                <h4>E-mail:</h4>
                <input type="email" placeholder="Digite seu email" required/>
            </label>
        </div>
        <div>
            <label>
                <h4>Celular:</h4>
                <input type="text" placeholder="(21) 99999-9999" required/>
            </label>
        </div>
        <div>
            <label>
                <h4>CPF:</h4>
                <input type="text" placeholder="999.999.999-99" required/>
            </label>
        </div>
        <div>
            <label>
                <h4>Número do Cartão:</h4>
                <input type="text" placeholder="Número do Cartão*" required/>
            </label>
        </div>

        <div className="botões">
        <button>Comprar</button>
        <Link to="/produtos"><button>Voltar as Compras</button></Link>
        </div>

        </form>
        
        <Footer/>
        </>
    )
}
export default Carrinho