import '../../../styles/Main/SearchResults/searchresults.css';

import { useState } from 'react';

import RenderCards from './RenderCards/rendercards';
import Navigationresults from './Navigationresults/navigationresults';
import Warning from './Warning/warning';
import Filterresults from './Filterresults/filterresults';
import { CardByRequest } from '../../../api/mtg';



const SearchResults = (props) => {

    const [toView, setToView] = useState(props.output)

    function filterResults(string) {
        if (string) {
            setToView(props.output.filter((carta) => carta.name.toLowerCase().includes(string.toLowerCase())))
        } else {
            setToView(props.output)
        }
    }

    function newPage(link) {
        CardByRequest(link)
            .then(res => {
                props.up(res);
                setToView(res.data.cards)
            })
    }

    return (
        <>
            <div className="results">
                <div className='info-results'>
                    <Filterresults changeMe={filterResults} />
                    {props.number > 0 && <Warning number={props.number} />}
                </div>
                <RenderCards output={toView} />
                {props.pages.length > 1 && <Navigationresults navigation={props.pages} links={props.links} clickedButton={newPage} />}
            </div>
        </>
    )
};

export default SearchResults;