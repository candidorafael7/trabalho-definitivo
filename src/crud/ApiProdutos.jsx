import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom"
import './ApiProdutos.css'

function  ApiProdutos(){

const [valor, setValor] = useState([])
const navigat = useNavigate()

useEffect(() => {
    axios.get("http://localhost:3000/produtos")
    .then(res => setValor(res.data))
    .catch(err => console.log(err))
})


    return(
        <>
        <div className="container "><br />
            <div className="text-end"><Link to="/criar" className="btn btn-primary">Adicionar</Link></div>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>{d.valor}</td>
                        <td><img src={d.img} className="foto"/></td>
                        <td>
                            <Link to={`/atualizar/${d.id}`} className="btn btn-success">Atualizar</Link>
                            <button style={{height:'37.6px',width:'87.23px'}} onClick={e => hardSubmit(d.id)}  className="btn btn-danger">Excluir</button>
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        
        </>
    )
    
    //função excluir
    function hardSubmit(id){
        const conf = window.confirm("Deseja excluir esse registro?")
        if(conf){
            axios.delete("http://localhost:3000/produtos/"+id)
            .then(res => {
                alert("Dados excluidos com sucesso!")
                navigat("/admin")
            }).catch(err => console.log(err))
        }
    }
}
export default ApiProdutos