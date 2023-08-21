import { ReactSVG } from "react-svg";
import star from '../imgs/Star.svg'
import ticket from '../imgs/Ticket.svg'
import clock from '../imgs/Clock.svg';
import './portada.scss'

const ESTRENO = {
    texto: "Estreno",
    color: "bg-acento-2",
    imagen: star
};
const PREVENTA = {
    texto: "Pre-venta",
    color: "bg-acento-1",
    imagen: ticket
};

export default function Portada({props}) {
    let a = () => {
        switch(props.tipo) {
            case 0: return Tipo(ESTRENO)
            case 1: return Tipo(PREVENTA)
            case 2: return ("")
        }
    }
    
    return (
        <div className="d-flex flex-column align-items-center gap-2">
            <img src={props.imagen} alt="" 
            className={`portada ${(props.tipo === 0)? 'estreno':(props.tipo === 1)? 'preestreno':''}`}/>
            {a(props.tipo)}
            <div className="d-flex flex-row gap-2">
                <ReactSVG src={clock} className="fill-white icon d-flex align-items-center"/>
                <span className="d-flex flex-row align-items-center">{props.tiempo}</span>
            </div>
            <h2 className="txt-white">{props.nombre}</h2>
        </div>
    )
}

function Tipo(valor) {
    
    return (
        <div className={`${valor.color} rounded-3 px-2 py-1 d-flex flex-row gap-2 w-fit`}>
            <ReactSVG src={valor.imagen} className="fill-white d-flex flex-column"/>
            {valor.texto}
        </div>
    )
}