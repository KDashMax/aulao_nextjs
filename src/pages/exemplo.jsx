import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"


export default function Exemplo() {
    return (
        <Layout titulo="Exemplo Usando Componentes">
            <h1>Exemplo</h1>
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprenda Next na prática"/>
        </Layout>

    )
}