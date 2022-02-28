const getValor = async (valor: number = 0): Promise<number> => {
    return new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100) + valor
            if (numero % 10 === 0) {
                rejeitar("numero tem resto de 0")
            } else {
                console.log(`o valor é ${numero}`)
                resolver(numero)
            }
        }, 1000)
    })
}

// getValor(0)
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .then((resultado: number) => getValor(resultado))
//     .finally(() => console.log('finalizado o produto'))


let contarLoops = 0

// const faca = () => {
//     Promise.all(
//         Array(10).fill(null).map(() => getValor())
//     ).then(valor => {
//         console.log(`total de valores é ${valor.reduce((previsto, atual) =>
//             previsto + atual, 0
//         )}`)
//     }).catch(faca).finally(() => console.log(`finalizado contando loop ${++contarLoops}`))
// }
// faca()

const gerarUmNumero = (iteracao: number): void => {
    Promise.allSettled(
        // Produz uma matriz de comprimento de "iterações" com as promessas pendentes de 'getTheValue'
        Array(iteracao).fill(null).map(() => getValor())
    ).then((settledResults) => {
        //  Mapeie todos os resultados nos valores fracassados, bem sucedidos e totais.
        const resultados = settledResults.reduce(
            (anterior, momentoAtual) => {
                return momentoAtual.status === "fulfilled" ? {
                    ...anterior,
                    sucedido: anterior.succeeded + 1,
                    total: anterior.total + momentoAtual.value,
                } : {
                    ...anterior, failed: anterior.failed + 1
                }
            },
            {
                failed: 0,
                succeeded: 0,
                total: 0,
            })
        console.log(resultados)
    })
        .finally(() => {
            console.log("finalizando funcao!")
        })
}

// todas as promessas
Promise.all(
    Array(3).fill(null).map(() =>
        gerarUmNumero(10))
).then((resultado) => console.log(resultado))

gerarUmNumero(10)