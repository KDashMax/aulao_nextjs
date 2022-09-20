import Navegador from "../components/Navegador"

export default function Inicio() {
    
    return (
        <>
            <h1>Fundamentos de Next.js & React</h1>
            <h2>Vamos estudar esse framework</h2>
            <h4>* Páginas</h4>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo"/>
            <Navegador texto="JSX" destino="/jsx"/>
        </>
    )
}