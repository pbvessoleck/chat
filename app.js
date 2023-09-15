'use strict'

const contatos = [
    {
        nome: 'Vitor fedido',
        foto: 'vitor.png',
        qntd: '5',
        mensagem: 'digitando...',
        tempo: 'agora',
        contato: 'Paloma'
    },
    {
        nome: 'véio',
        foto: 'pai.png',
        qntd: '2',
        mensagem: 'blz',
        tempo: 'há 30 minutos',
        contato: 'Paloma'
    },
    {
        nome: 'mãe',
        foto: 'mae.png',
        qntd: '5',
        mensagem: 'boa aula',
        tempo: '13:15',
        contato: 'Paloma'
    },
    {
        nome: 'nicnic',
        foto: 'nicnic.png',
        qntd: '3',
        mensagem: 'Deus abençoe paizona',
        tempo: '13:00',
        contato: 'Paloma'
    },
    {
        nome: 'Campos',
        foto: 'campos.png',
        qntd: '1',
        mensagem: 'fala aí pamela',
        tempo: '12:04',
        contato: 'Paloma'
    },
    {
        nome: 'gabas',
        foto: 'gabas.png',
        qntd: '10',
        mensagem: 'instala roblox aí palomaa',
        tempo: '10:20',
        contato: 'Paloma'
    },
    {
        nome: 'julia',
        foto: 'julia.png',
        qntd: '2',
        mensagem: 'comprei na natura',
        tempo: 'ontem',
        contato: 'Paloma'
    }
]

function criarCards (contatos){
    const container = document.getElementById('card-container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${contatos.foto}`
    img.alt = contatos.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('info')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCtt = document.createElement('h3')
    nomeCtt.classList.add('nomeCtt')
    nomeCtt.textContent = contatos.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('qntd')
    qtdMensagem.textContent = contatos.qntd

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = contatos.mensagem

    nomeContato.replaceChildren(nomeCtt, qtdMensagem)
    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = contatos.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = contatos.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

contatos.forEach(criarCards)