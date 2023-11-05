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
                <span>Petzin!</span>
                </h1>
                <a href='/produtos' type='button' className='btn btn-success'>Saiba Mais!</a>
            </div>

            <div>
                <figure className='d-flex flex-column'>
                    <img src="../../../public/gato (1).png" alt="gato imagem"  className='mb-4'/>
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

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://m.media-amazon.com/images/I/819sPRNQpHL._AC_SL1500_.jpg" class="d-block imgH" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/819sPRNQpHL._AC_SL1500_.jpg" class="d-block imgH" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/819sPRNQpHL._AC_SL1500_.jpg" class="d-block imgH" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


            <Footer/>
        </>
    )
}

export default Home