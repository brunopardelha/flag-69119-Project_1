const commumStats = [
    'artist',
    'flavor',
    'layout',
    'manaCost',
    'power',
    'rarity',
    'text',
    'toughness'
];

const specialStats = [
    'set',
    'setName',
];

const arrayStats = [
    'colors',
    'types'
];

function sweepStats(object) {

    const readStats = Object.keys(object).map((key) => {
        let output;
        commumStats.forEach((element) => {
            if (element.includes(key)) {
                output = <li key={key.concat(object.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1) + ": "}</strong>{object[key]}</li>
            }
        });
        specialStats.forEach((element) => {
            if (element.toLowerCase() === key.toLowerCase()) {
                output = <li key={key.concat(object.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1) + ": "}</strong>{object[key]}</li>
            }
        });
        arrayStats.forEach((element) => {
            let allArray = "";
            if (key.toLowerCase() === element.toLowerCase()) {
                for (let index = 0; index < object[key].length; index++) {
                    allArray += object[key][index] + ", "
                }
                output = <li key={key.concat(object.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1) + ": "}</strong>{allArray}</li>
            }
        });
        return (output);
    });
    return readStats;
}

export default sweepStats;