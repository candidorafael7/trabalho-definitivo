import axios from "axios"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './cards.css'


function Cards() {

    const [valor, setValor] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(res => setValor(res.data))
        .catch(err => console.log(err))
    },[] )
    return (
      <>
      <div className="cards">
           
            <div style={{display: "flex", flexWrap: "wrap", gap: "15px", width:'100%'}}>
            {
             valor.map((d, i) => (
            <Card key={i} style={{ width: '18rem'}}>
            <Card.Img variant="top" src={d.img}/>
            <Card.Body>
                <Card.Text>{d.nome}</Card.Text>
                <Card.Text>R$ {d.valor}</Card.Text>
                <Link to={`/carrinho/${d.id}`} className="btn btn-success">Comprar</Link>
            </Card.Body>    
            </Card>    
            ))
            }
            </div>
        </div>
            
      </>
    )
  }
  
  export default Cards;