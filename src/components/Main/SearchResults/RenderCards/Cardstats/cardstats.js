import '../../../../../styles/Main/SearchResults/RenderCards/Cardstats/cardstats.css';

import sweepStats from '../../../../../services/fullstats';

const Cardstats = (props) => {

    const readStats = sweepStats(props.data);

    return (
        <ul className="card-stats">{readStats}</ul>
    )
}

export default Cardstats;
