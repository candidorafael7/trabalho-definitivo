import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"


function Atualizar(){
    //variaveis
    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()

    useEffect(() => {
        axios.get("https://bd-react-9kp5.onrender.com/produtos/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handSubmit(event){
        event.preventDefault()
        axios.put("https://bd-react-9kp5.onrender.com/produtos/"+id, data)
        .then(res =>{
            alert("Dados atualizados com sucesso!")
            navigat("/admin")
        })
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={handSubmit} >
                <div>
                    <label htmlFor="id">id</label><br/>
                    <input type="id" name="id" value={data.id} className="from-control"
                     onChange={e => setData({...data, id: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="nome">nome</label><br/>
                    <input type="nome" name="nome" value={data.nome} className="from-control" 
                    onChange={e => setData({...data, nome: e.target.value})}/>
                </div><br/>
                <div>
                    <label htmlFor="valor">valor</label><br/>
                    <input type="valor" name="valor" value={data.valor} className="from-control" 
                    onChange={e => setData({...data, valor: e.target.value})}/>
                </div><br/>
                <div>
                    <label htmlFor="img">imagem</label><br/>
                    <input type="img" name="img" value={data.img} className="from-control" 
                    onChange={e => setData({...data, img: e.target.value})}/>
                </div><br/>
                <button className="btn btn-info" >Atualizar</button>
            </form>
            </div> 
           
           
        </div>
    )
}

export default Atualizar