import "./Header.css";
import { FaCoins } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="cabecalho">
            <div className="logo">
                <FaCoins className="logo-icon"/>
                <span>Controle financeiro</span>
            </div>
            <div className="links">
                <Link to="/criar-conta" className="botao-criar-conta">Criar conta</Link>
                <Link to="/login" className="botao-entrar">Entrar</Link>
            </div>
        </header>
    )
}

export default Header;