fetch("https://meu-server.com/meu-repositorio")
    .then(valor => console.log(valor))
    .catch(error => console.log(error));


fetch("https://meu-server.com/meu-repositorio")
    .then(data => showData(data))
    .catch(error => handleError(error))


const pendentePromessa = new Promise((resolver, rejeitar) => {})
console.log(pendentePromessa)

const promessaComprida = new Promise(resolver => {
    resolver("Promessa Cumprida")
})

const rejeitarPromessa = new Promise((resolver, rejeitar) => {
    rejeitar('rejeitar')
})

console.log(promessaComprida)