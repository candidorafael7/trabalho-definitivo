import { Link } from "react-router-dom";
import styles from "./Form.module.css";

function Form() {
    return(
        <section className={styles.container}>
            
            <form action="">
                <h2>Preencha os campos para fazer login!</h2>
                <div>
                    <label >
                        <input type="email" placeholder="Digite seu email" required="required"/>

                    </label>
                </div>
                <div>
                    <label>
                        <input type="password" placeholder="Digite sua senha" required />
                    </label>
                </div>
                <div className={styles.btns}>
                    <button>Fazer Login</button>
                    <Link to="/cadastro"><button className={styles.btn2}>Fazer Cadastro</button></Link>
                </div>
    
            </form>
        </section>

    )
}

export default Form