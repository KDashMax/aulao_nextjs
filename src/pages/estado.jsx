import { useState } from "react";
import Layout from "../components/Layout";

export default function Estodo() {
    const state = useState(0)
    
    let numero = state[0]
    let alterarNumero = state[1]
    
    // console.log(numero)    

    function incrementar( ) {
        alterarNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}