import Navegador from "../components/Navegador"

export default function Inicio() {
    
    return (
        <> 
            {/* <div className="mainCabecalho">
                <h1>Fundamentos de Next.js & React</h1>
                <h2>Vamos estudar esse framework</h2>
                <h4>* Páginas:</h4>
            </div> */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexWrap: 'wrap',
            }}>
                <Navegador texto="Estiloso" destino="/estiloso"/>
                <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
                <Navegador texto="JSX" destino="/jsx" cor="crimson" />
                <Navegador texto="Navegação #01" destino="/navegacao/" cor="green" />
                <Navegador texto="Navegação #02" destino="/cliente/sp-2/991" cor="navy" />
                <Navegador texto="Componente com Estado" destino="/estado" cor="hotpink" />
                <Navegador texto="Integração com API #01" destino="/integracao_1" cor="goldenrod" />
                <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a" />
            </div>
        </>
    )
}