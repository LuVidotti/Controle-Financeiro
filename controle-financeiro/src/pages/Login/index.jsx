import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="criar-conta">
            <h1>Entrar</h1>
            <div className="criar-conta-container">
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email"/>

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha"/>

                    <button type="submit">Entrar</button>

                    <div className="redirecionar">
                        <p>Ainda não tem uma conta?</p>
                        <Link to="/criar-conta">Criar conta</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;