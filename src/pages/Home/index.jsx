import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import './home.css'
import NavBar from '../../components/Header/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    return (

        <>
          <section className='container d-flex align-items-center justify-content-around'>
            <div> 
                <h1>Bem vindo ao <br/>
                <span>Petzin</span>
                </h1>
                <a href='/produtos' type='button' className='btn btn-success'>Saiba Mais!</a>
            </div>

            <div>
                <figure className='d-flex flex-column'>
                    <img src="../../../gato (1).png" alt="gato imagem"  className='mb-4'/>
                    <i>
                        <a target='_blank'
                        className='link-offset-2 link-underline link-underline-opacity-0 link-success' 
                        href="https://www.flaticon.com/br/icones-gratis/gato" 
                        title="gato ícones">
                        
                            Gato ícones criados por Voysla - Flaticon
                        </a>
                    </i>
                </figure> 
           </div>  
          </section>

        <Footer/>
        </>
    )
}

export default Home