import "./CriarConta.css";
import { Link } from "react-router-dom";

function CriarConta() {
    return (
        <div className="criar-conta">
            <h1>Criar conta</h1>
            <div className="criar-conta-container">
                <form>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome"/>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email"/>

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha"/>

                    <label htmlFor="senha2">Confirmar senha</label>
                    <input type="password" id="senha2"/>

                    <button type="submit">Criar conta</button>

                    <div className="redirecionar">
                        <p>Já tem uma conta?</p>
                        <Link to="/login">Fazer login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CriarConta;