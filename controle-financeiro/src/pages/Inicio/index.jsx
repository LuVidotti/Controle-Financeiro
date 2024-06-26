import Header from "../../components/Header";
import "./Inicio.css";

function Inicio() {
    return (
        <>
            <Header />
            <div className="inicio">
                <h1>Controle seus gastos e ganhos de forma simples, fácil e rápida em um só lugar</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 340">
                    <path fill="#00ae96" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,64C640,75,800,149,960,165.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div className="ghost">

                </div>
            </div>
        </>
        
    )
}

export default Inicio;