const mtg = require('mtgsdk');

// axios.interceptors.response.use(function (response) {
//     console.log(response.headers.link);
//     console.log(response.data);
//     return response.data
// })

export function OneCard() {
    const max = 4980;

    const random = Math.floor(Math.random() * max);

    return mtg.card.find(random)
}

export function One() {
    return (fetch('https://api.magicthegathering.io/v1/cards/3214')
        .then(res => res.json()))
}

export function SearchByName(userInput = 'sardia') {
    return mtg.card.where({ name: userInput })
        .then(cards => cards.forEach((element) => console.log(element.name)))

}

export function SearchByPower(userInput = '9') {
    return mtg.card.where({ power: userInput })
        .then(cards => cards.forEach((element) => console.log(element.power)))
}

export function SearchByRarity(userInput = 'Rare') {
    return mtg.card.where({ rarity: userInput })
        .then(cards => cards.forEach((element) => console.log(element.rarity)))
}

export function SearchByToughness(userInput = '9') {
    return mtg.card.where({ toughness: userInput })
        .then(cards => cards.forEach((element) => console.log(element.toughness)))
}

export function SearchByColor(userInput = 'red') {
    return mtg.card.where({ colors: userInput })
        .then(cards => cards.forEach((element) => console.log(element.colors)))
}

export function SearchByType(userInput = 'Creature') {
    return mtg.card.where({ type: userInput })
        .then(cards => cards.forEach((element) => console.log(element.type)))
}

// TODO utilizar o SDK para a API ou então o axios para função com 2 parametros

export function Search(tipo, userInput) {
    const baseUrl = 'https://api.magicthegathering.io/v1/cards/?'
    return (fetch(baseUrl + tipo.toLowerCase() + '=' + userInput.toLowerCase())
        .then(res => res.json())
        .then(json => json.cards)
    )
}





// Get all cards
// mtg.card.all()
//   .on('data', function (card) {
//     console.log(card.name)
//   });

// mtg.set.find('AER')
//   .then(result => {
//     console.log(result.set.name) // "Aether Revolt"
//   })

// mtg.card.where({ name: 'Hammer of Bogardan' })
//   .then(cards => {
//     cards.forEach(element => {
//       console.log(element.multiverseid)
//     })
//   })

const api = {
    OneCard,
    SearchByName,
    SearchByPower,
    SearchByRarity,
    SearchByToughness,
    SearchByColor,
    SearchByType,
    One,
    Search
};

export default api;