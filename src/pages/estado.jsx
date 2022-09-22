import Layout from "../components/Layout";

export default function Estodo() {
    let numero = 3

    function incrementar( ) {
        numero += 1
        console.log(numero)    
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}