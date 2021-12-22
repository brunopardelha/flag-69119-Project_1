import '../styles/rendercards.css'
import Cardstats from './cardstats';

// import Loading from './loading';
// import { useEffect, useState } from 'react';

const RenderCards = (props) => {
    //FIXME corrigir o ecrã de loading
    // const [temResposta, setTemResposta] = useState(true);

    // input de objects cards com resultados num array
    const card = props.output.map(carta => {
        return (
            <a href={carta.imageUrl} target="_blank" rel="noreferrer" key={carta.id}>
                <div
                    style={{ backgroundImage: `url(${carta.imageUrl})` }}
                    className="blog-card spring-fever"
                >
                    <div className="title-content">
                        <h3>{carta.name}</h3>
                    </div>
                    <div className="card-info">
                        <Cardstats data={carta} key={carta.id} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                </div>
            </a>

        )
    });

    return (
        <div className='search_container'>
            {card}
            {/* {!temResposta ? <Loading /> : { card }} */}
        </div>
    )
}

export default RenderCards;