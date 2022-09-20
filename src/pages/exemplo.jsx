import Cabecalho from "../components/Cabecalho"

export default function Exemplo() {
    return (
        <Layout titulo="Exemplo Usando Componentes">
            <h1>Exemplo</h1>
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprenda Next na prática"/>
        </Layout>

    )
}