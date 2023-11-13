import Footer from "../../components/Footer"
import './contato.css'
import imgcontato from '../../assets/imgcontato.jpg'

function Contato(){
    return(
        
        <>

        <section>



                <div className="div-imagem">

                    <figure>
                        <img src={imgcontato}/>
                    </figure>

                </div>

                <div className='div-form' >

                    <form className="form-contato">
                        <h2>Preencha abaixo para entrar <br /> em contato conosco!</h2>
                        <div>
                            <label >
                                <h4>Nome:</h4>
                                <input type="nome" placeholder="Digite seu nome " required/>
                            </label>
                        </div>
                        <div>
                            <label >
                                <h4>Email:</h4>
                                <input type="email" placeholder="exemplo@email.com" required/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <h4>Telefone/Celular:</h4>
                                <input type="text" placeholder="(21) 99999-9999" required/>
                            </label>
                        </div>
                        <div>
                            <label >
                                <h4>Assunto: </h4>
                                <textarea placeholder="Digite uma mensagem" cols="30" rows="6" required="required" ></textarea>
                            </label>
                        </div>
                        <div >
                            <button className="btn btn-success" >Enviar</button>
                        </div>



                    </form>
                </div>

            </section>
        <Footer/>
     </>
     
    )
}

export default Contato