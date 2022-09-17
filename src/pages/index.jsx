import Link from "next/link"

export default function Inicio() {
    // "<h1>Título</h1>"
    // return <h1>Título</h1>
    return (
        <>
            <h1>Fundamentos de Next.js & React</h1>
            <h2>Vamos estudar esse framework</h2>
            <h4>* Páginas</h4>
            <Link href="/estiloso">
                Estiloso
            </Link>
        </>
    )
}