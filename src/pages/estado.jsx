import Layout from "../components/Layout";

export default function Estodo() {
    let numero = 3

    function incrementar() {
        console.log('incrementar')    
    }

    return (
        <Layout titulo="Componente com Estado">
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}