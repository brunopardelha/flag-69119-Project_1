import '../styles/searchresults.css'
import RenderCards from './rendercards';
import Navigationresults from './navigationresults'
import Warning from './warning';
import Filterresults from './filterresults'
import { useState } from 'react';

const SearchResults = (props) => {

    const [toView, setToView] = useState(props.output)

    //FIXME ao fazer nova procura, não aparecem as ilustrações pois é preciso inicializar novamente o input da pesquisa
    //talvez porque não diferencio ou porque não tenho um valor default

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
            {props.pages.length > 1 && <Navigationresults navigation={props.pages} links={props.links} /> }
        </div>
    )

};

export default SearchResults;