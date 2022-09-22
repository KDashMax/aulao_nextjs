import Layout from "../../components/Layout"
// import { useRouter } from "next/router"
import router from "next/router"
import { useEffect } from "react"

export default function ClienteProCodigo() {
    // console.log(router.query);
    useEffect(() => {
        console.log(router.query);
        console.log(router.query.codigo);
    }, [])
    return (
        <Layout titulo="Navegação Dinâmica">
            <span>Código = ????</span>
        </Layout>
    )
}