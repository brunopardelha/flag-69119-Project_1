import axios from 'axios';

const mtg = require('mtgsdk');

export function OneCard() {
    const max = 4980;

    const random = Math.floor(Math.random() * max);

    return (mtg.card.find(random))
}

export function CardByRequest(link) {
    return (axios.get(link))
}

export function One() {
    return (fetch('https://api.magicthegathering.io/v1/cards/3020')
        .then(res => {
            console.log(res.headers);
            res.json();
        }))
}

// const baseUrl = 'https://api.magicthegathering.io/v1/cards?page=4'
export function AxiosSearch(tipo, userInput) {
    const baseUrl = 'https://api.magicthegathering.io/v1/cards/?'
    return (axios.get(baseUrl + tipo.toLowerCase() + '=' + userInput.toLowerCase()))
}