import '../styles/randomcard.css'

function randomCard(props) {
    // console.log(props);

    const short = props.random;

    return (
        <>
            <button type="submit" onClick={() => { console.log('clicked') }}>Another Card</button>
            <div className="info">
                <div className="picture">
                    <img src={short.imageUrl} alt='Random card from the game Magic The Gathering' />
                </div>
                <div className="stats">
                    <p>Card Name: {short.name}</p>
                    <p>Artist card: {short.artist}</p>
                    <p>Color: {short.colors}</p>
                    <p>Mana cost: {short.manaCost}</p>
                    <p>Text card: {short.text}</p>
                    <p>Quote: {short.flavor}</p>
                    <p>Set (Abr.) : {short.setName} ({short.set})</p>
                    <p>Types card: {short.types}</p>
                    <p>Power/Toughness: {short.power}/{short.toughness}</p>
                </div>
            </div>
        </>
    )
}

export default randomCard;