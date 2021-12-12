import axios from 'axios';

const baseURL = 'https://api.scryfall.com/cards/named?fuzzy=sardia';

const api = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default function OneCard() {

   return api.get(baseURL)
      .then( response => console.log(response))   // handle success
      .catch( error => console.log(error)) // handle error
}

