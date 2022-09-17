import estilo from '../styles/Mycomponent.module.css'

export default function MyFirstComponent() {
    return (
        <>
            <h1>My First Component</h1>
            <h2>This is my first component</h2>
            <div className={estilo.ciano}>
                <h2>Estilo usando CSS Módulos</h2>
                <h3>Estilo 2</h3>
                <h4>Na pasta pages temos componentes funcionais!</h4>
            </div>
        </>
    )
}