import '../styles/renderonecard.css';

const Renderonecard = (props) => {
    // console.log(props.output[0]);
    const carta = props.output[0];

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

    const teste = Object.keys(carta).map((key) => {
        let output;
        commumStats.forEach((element) => {
            if (element.includes(key)) {
                output = <li key={key.concat(carta.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1) + ": "}</strong>{carta[key]}</li>
            }
        });
        specialStats.forEach((element) => {
            if (element.toLowerCase() === key.toLowerCase()) {
                output = <li key={key.concat(carta.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1) + ": "}</strong>{carta[key]}</li>
            }
        });
        arrayStats.forEach((element) => {
            let allArray = "";
            if (key.toLowerCase() === element.toLowerCase()) {
                for (let index = 0; index < carta[key].length; index++) {
                    allArray += carta[key][index] + ", "
                }
                output = <li key={key.concat(carta.id)}><strong>{element.charAt(0).toUpperCase() + element.slice(1) + ": "}</strong>{allArray}</li>
            }
        });
        return (output);
    })

    return (
        <>
            <div className='name info-card'>
                <h2>{carta.name}</h2>
            </div>
            <div className="info-card">
                <div className='row'>
                    <div
                        className="one-card"
                        style={{ backgroundImage: `url(${carta.imageUrl})` }}>
                    </div>
                    <div className="stats-card">
                        {teste}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Renderonecard;