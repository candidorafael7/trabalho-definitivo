import styles from "./Form2.module.css";

function Form2() {
    return(
        <section className={styles.container}>
            
            <form action="">
                <h2>Preencha os campos para fazer Cadastro!</h2>
                <div>
                    <label >
                        <input type="nome" placeholder="Digite seu nome" required="required"/>
                    </label>
                </div>
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
                    <button className={styles.btn2}>Fazer Cadastro</button>
                </div>
    
            </form>
        </section>

    )
}

export default Form2