const mtg = require('mtgsdk');

export function OneCard() {
    const max = 4980;

    const random = Math.floor(Math.random() * max);

    return (mtg.card.find(random))
}

export function One() {
    return (fetch('https://api.magicthegathering.io/v1/cards/3020').then(res => res.json()))
}