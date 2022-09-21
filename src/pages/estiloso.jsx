import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'


export default function Estiloso() {
    return (
        <div className={styles.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Componente X </h1>
            <h6>Estilo usando CSS Módulos</h6>
            <h3>O componente mais Estiloso do momento!!!</h3>

        </div>
    )
}