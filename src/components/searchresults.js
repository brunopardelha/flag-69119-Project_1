import '../styles/searchresults.css'
import RenderCards from './rendercards';
import Navigationresults from './navigationresults'
import Warning from './warning';
import Filterresults from './filterresults'
import { useState } from 'react';


// import headersToLinks from '../services/helper'

//irá receber via props
// const mock_data = '<https://api.magicthegathering.io/v1/cards?page=1>; rel="first", <https://api.magicthegathering.io/v1/cards?page=636>; rel="last", <https://api.magicthegathering.io/v1/cards?page=5>; rel="next", <https://api.magicthegathering.io/v1/cards?page=3>; rel="prev"'

const SearchResults = (props) => {

    // const buttons = [
    //     "First",
    //     "Previous",
    //     "Next",
    //     "Last"
    // ];

    const [toView, setToView] = useState(props.output)

    //FIXME ao fazer nova procura, não aparecem as ilustrações pois é preciso inicializar novamente o input da pesquisa

    function filterResults(string) {
        setToView(props.output.filter((carta) => carta.name.toLowerCase().includes(string.toLowerCase())))
    }

    return (
        <div className="results">
            <div className='info-results'>
                <Filterresults changeMe={filterResults} />
                {props.number > 0 && <Warning number={props.number} />}
            </div>
            <RenderCards output={toView} />
            <Navigationresults navigation={props.pages} links={props.links} />
        </div>
    )

};

export default SearchResults;