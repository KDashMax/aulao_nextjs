export default function Cabecalho(props) {
    // console.log(props.titulo);
    // props é somente leitura
    return (
        <header>
            {/* <h1>Fundamentos de Next.js & React</h1> */}
            <h1>{props.titulo}</h1>
        </header>
    )
}