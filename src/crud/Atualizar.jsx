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
        axios.get("http://localhost:3000/produtos"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handSubmit(event){
        event.preventDefault()
        axios.put("http://localhost:3000/produtos"+id, data)
        .then(res =>{
            alert("Dados atualizados com sucesso!!")
            navigat("/")
        })
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={handSubmit} >
            <div>
                    <label htmlFor="name">Id</label><br/>
                    <input type="text" name="id" className="from-control" 
                    onChange={e=>setInputData({...inputData, id: e.target.value})} />
            </div><br/>
            <div>
                    <label htmlFor="name">Nome</label><br />
                    <input type="text" name="name" className="from-control" 
                    onChange={e=>setInputData({...inputData, nome: e.target.value})} />
            </div><br/>
            <div>
                    <label htmlFor="name">Valor</label><br />
                    <input type="text" name="valor" className="from-control"
                    onChange={e=>setInputData({...inputData, valor: e.target.value})} />
            </div><br/>
            <div>
                    <label htmlFor="name">imagem</label><br />
                    <input type="img" name="img" className="from-control"
                    onChange={e=>setInputData({...inputData, img: e.target.value})} />
            </div><br/>
                <button className="btn btn-success" >Atualizar</button>
            </form>
            </div> 
           
           
        </div>
    )
}

export default Atualizar