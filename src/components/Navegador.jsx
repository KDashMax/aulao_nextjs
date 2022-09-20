import Link from "next/link"
import style from "../styles/Navegador.module.css"

export default function Navegador(props) {
    
    return (
        <Link href={props.destino}>
            {props.texto}
        </Link>
    )
}