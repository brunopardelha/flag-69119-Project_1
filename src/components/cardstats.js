import '../styles/cardstats.css';

const Cardstats = (props) => {

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

    const teste = Object.keys(props.data).map((key) => {
        let output;
        commumStats.forEach((element) => {
            if (element.includes(key)) {
                output = <li key={key.concat(props.data.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1)+": "}</strong>{props.data[key]}</li>
            }
        });
        specialStats.forEach((element) => {
            if (element.toLowerCase() === key.toLowerCase()) {
                output = <li key={key.concat(props.data.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1)+": "}</strong>{props.data[key]}</li>
            }
        });
        arrayStats.forEach((element) => {
            let allArray = "";
            if (key.toLowerCase() === element.toLowerCase()) {
                for (let index = 0; index < props.data[key].length; index++) {
                    allArray += props.data[key][index]+", "
                }
                output=<li key={key.concat(props.data.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1)+": "}</strong>{allArray}</li>
            }
        });
        return (output);
    })

    return (
        <ul className="card-stats">{teste}</ul>
    )
}

export default Cardstats;
