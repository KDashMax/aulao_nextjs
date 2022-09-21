import Layout from "../components/Layout";

export default function Jsx() {
    const a = 4
    const b = 3
    console.log(a + b);
    console.log(a == b);
    console.log(a * b);

    const obj = {nome: "João", idade: 30}

    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    function random2(){
        return <h2>{40}</h2>
    }
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {/* <h1>JSX é um conceito Central</h1> */}
                {titulo}
                {subtitulo()}
                {random2()}
                const a = 1 
                const b = 5
                console.log(a * b);
                {a * b}
                {console.log(a * b)}

                {"muito legal"}
                {"muito legal".toUpperCase()}
            
                {/* {Math.random()} */}  {/* após adicionar outros trechos de código, esse trecho começou a gerar erros */}
                
                {a}
                <h2>{a}</h2>
                <p>
                    {JSON.stringify({nome: "Joana", idade: 25})}
                    {JSON.stringify(obj)}
                </p>
            </div>
        </Layout>
    )
}