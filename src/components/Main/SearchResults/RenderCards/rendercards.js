import '../../../../styles/Main/SearchResults/RenderCards/rendercards.css';

import { Link } from 'react-router-dom';

import Cardstats from './Cardstats/cardstats';

const RenderCards = (props) => {
    const card = props.output.map((carta, index) => {
        return (
            <Link to={`/carddetail/${index}`} key={carta.id}>
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
            </Link>
        )
    });

    return (
        <div className='search_container'>
            {card}
        </div>
    )
}

export default RenderCards;