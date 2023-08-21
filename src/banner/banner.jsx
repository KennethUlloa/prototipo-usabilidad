import './banner.css'
import logo from '../imgs/Logo Multicines.svg'
import {getSucursales, getListaDias} from '../api'
import { ReactSVG } from "react-svg";
import carrito from '../imgs/I_Carrito.svg';
import palomitas from '../imgs/I_Palomitas.svg';
import cinta from '../imgs/I_Cinta_Pelicula.svg';
import perfil from '../imgs/I_Perfil.svg';



export default function Banner() {
    return (
        <header 
        className='d-flex flex-row bg-fondo-2 justify-content-between'>
            <div className='logo d-flex align-items-center'>
                <img src={logo}/>                
            </div>
            <div className='sucursal d-flex flex-column justify-content-center'>
                <div className='d-flex flex-row gap-3'>
                    <span className='d-flex flex-column justify-content-center'>Complejo</span>
                    <select name="" id="complejo" 
                    className='form-select txt-primario text-center bg-dark select'>
                        {
                            getSucursales().map(item => 
                                <option className='txt-white'>{item.nombre}</option>
                            )
                        }
                    </select>           
                </div>
                <select name="" id="" className='form-select border-0 bg-transparent'>
                        {
                            getListaDias().map(dia => 
                                <option className='bg-fondo-2'>{
                                    dia.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })
                                    }</option>
                                )
                        }
                    </select>
            </div>
            <div className='d-flex flex-row gap-3'>
                <Boton texto="Cartelera" img={cinta}/>
                <Boton texto="Dulcería" img={palomitas}/>
                <Boton texto="Perfil" img={perfil}/>
                <Boton texto="Carrito" img={carrito}/>
            </div>
        </header>
    )
}

function Boton({texto, img}) {
    return (
        <button className={`bg-fondo border-0 p-2 txt-white d-flex flex-column rounded-3
        align-items-center
        `}>
            <ReactSVG src={img} 
            className='fill-white'
            />
            <span>{texto}</span>
        </button>
    )
}

