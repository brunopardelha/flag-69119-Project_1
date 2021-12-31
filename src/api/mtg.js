import axios from 'axios';
const mtg = require('mtgsdk');
// import mtg from 'mtgsdk'

export function AxiosSearch(tipo, userInput) {
    const baseUrl = 'https://api.magicthegathering.io/v1/cards/?'
    return (axios.get(baseUrl + tipo.toLowerCase() + '=' + userInput.toLowerCase()))
}

export function CardByRequest(link) {
    return (axios.get(link))
}

export function OneCard() {
    const max = 4980;

    const random = Math.floor(Math.random() * max);

    return mtg.card.find(random)
}

export function Search(tipo, userInput) {
    const baseUrl = 'https://api.magicthegathering.io/v1/cards/?'
    return (fetch(baseUrl + tipo.toLowerCase() + '=' + userInput.toLowerCase())
        .then(res => res.json())
        .then(json => json.cards)
    )
}

const api = {
    AxiosSearch,
    CardByRequest,
    OneCard,
    Search
};

export default api;