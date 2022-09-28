import Layout from "../components/Layout"

export default function Estatico() {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{Math.random()}</div>
        </Layout>
    )
}