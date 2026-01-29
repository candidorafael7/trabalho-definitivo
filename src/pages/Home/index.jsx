import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Banner from './carousel';
import Footer from '../../components/Footer'
import imghome1 from '../../assets/imghome1.jpg'



function Home() {
    return (

        <>
          <section className='container d-flex align-items-center justify-content-around'>
            <div> 
                <h1>Bem vindo ao <br/>
                <span className='petzin'>Petzin!</span>
                </h1>
                <a href='/produtos' type='button' style={{fontSize:'20px'}} className='btn btn-success'>Saiba Mais!</a>
            </div>

            <div>
                <figure className='d-flex flex-column'>
                    <img src={imghome1} alt="gato imagem"  className='mb-4'/>
                </figure> 
           </div>  
          </section>

          <Banner/>

        <Footer/>
        </>
    )
}

export default Home