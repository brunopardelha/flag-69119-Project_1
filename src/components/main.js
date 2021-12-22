import '../styles/main.css';
import { AxiosSearch } from '../services/magic';
import { useState } from 'react';
import SelectSearchParameter from './SelectSearchParameter';
import SearchResults from './searchresults';
import Userstringinput from './userstringinput';
import Christmasbutton from './christmasbutton';
import { headersToLinks,headersToPages } from '../services/helper'

const Main = () => {

    const inicialState = {
        user: "",
        funcao: "Name",
    }

    const [result, setResult] = useState([]);

    const [userQuery, setUserQuery] = useState(inicialState);

    const [links, setLinks] = useState([]);
    const [pages, setPages] = useState([]);

    // const [numberNoImageResults, setNumberNoImageResults] = useState(0);
    let numberNoImageResults = 0;

    async function pagination(response) {
        setLinks(headersToLinks(response.headers.link));
        setPages(headersToPages(response.headers.link));
        // console.log(pages);
        // console.log(pages.length);
        setResult(response.data.cards);
    }

    function onChangeByUser(props) {
        setUserQuery({ ...userQuery, [props.name]: props.value })
    }

    function santaClaus() {
        // console.log('HOHOHOHOHO');
        AxiosSearch(userQuery.funcao, userQuery.user)
            .then(response => {
                pagination(response);
            })
    }

    function clearNoImageResults(array) {
        const filterResult = array.filter((carta) => carta.imageUrl !== undefined);
        numberNoImageResults = (array.length - filterResult.length);
        // setNumberNoImageResults(array.length - filterResult.length); // provoca um loop de render, estoira
        return filterResult;

    }
    //TODO fazer um componente para o main?! diminuia os hooks neste componente - passa para esse
    return (
        <>
            <div className="main">
                <h1>Search card by:</h1>
                <Userstringinput data={userQuery.user} ChangeMe={onChangeByUser} />
                <SelectSearchParameter ChangeMe={onChangeByUser} />
                <Christmasbutton ChangeMe={santaClaus} />
            </div>
            <hr className="split" />
            {result.length > 0 && <SearchResults output={clearNoImageResults(result)} number={numberNoImageResults} pages={pages} links={links} />}
        </>
    )
};

//TODO pensar em fazer um helper para ler o input do user e fazer procuras múltiplas

export default Main;