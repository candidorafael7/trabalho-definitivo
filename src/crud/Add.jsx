import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Add()
{
    const [inputData, setInputData] = useState({id:'',nome:'',valor:'',img:''})
    const navigat = useNavigate()

    function HandSubmit(event){
        event.preventDefault()
        axios.post("https://bd-react-9kp5.onrender.com/produtos", inputData)
        .then(res =>{
            alert("Dados inseridos com sucesso")
            navigat('/admin')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSubmit}>
                <div >
                    <label htmlFor="id">id</label><br/>
                    <input type="id" name="id" className="from-control" 
                    onChange={e=>setInputData({...inputData, id: e.target.value})}/>
                </div><br/>
                <div >
                    <label htmlFor="nome">nome</label><br/>
                    <input type="nome" name="nome" className="from-control" 
                    onChange={e=>setInputData({...inputData, nome: e.target.value})}/>
                </div><br/>
                <div >
                    <label htmlFor="valor">valor</label><br/>
                    <input type="valor" name="valor" className="from-control" 
                    onChange={e=>setInputData({...inputData, valor: e.target.value})}/>
                </div><br/>
                <div >
                    <label htmlFor="img">imagem</label><br/>
                    <input type="img" name="img" className="from-control" 
                    onChange={e=>setInputData({...inputData, img: e.target.value})}/>
                </div><br/>
                <button className="btn btn-info" >Enviar</button>
            </form>
            </div> 
           
           
        </div>
    )
    
}
export default Add