new Promise<void>((resolvido, rejeitado) => {
    setTimeout(() =>
        rejeitado(), 100)
})

new Promise<void>((resolver, rejeitar) => {
    setTimeout(() =>
        rejeitar(), 100)
})