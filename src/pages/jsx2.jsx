// objetivo -> Descobrir por que o trecho "{Math.random()}" está gerando ERRO
export default function Jsx() {
    const a = 4
    const b = 2
    console.log(a * b);
    return (
        <div>
            <h1>JSX é um conceito Central 2</h1>
            
            <h2>
                {Math.random()}
                </h2>
        </div>
    )
}