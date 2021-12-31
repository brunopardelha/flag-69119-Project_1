import '../styles/renderonecard.css';

import sweepStats from '../services/fullstats';

const Renderonecard = (props) => {
    const carta = props.output[0].card;

    const readStats = sweepStats(carta);

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
                        {readStats}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Renderonecard;