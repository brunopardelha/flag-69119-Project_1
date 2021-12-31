import '../styles/main.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SelectSearchParameter from './SelectSearchParameter';
import SearchResults from './searchresults';
import Userstringinput from './userstringinput';
import Christmasbutton from './christmasbutton';
import Player from './carousel'
import Loading from './loading'
import Renderonecard from './renderonecard';

import { AxiosSearch, OneCard } from '../api/mtg';
import { headersToLinks, headersToPages } from '../services/helper'

const Main = () => {

    const inicialState = {
        user: "",
        funcao: "Name",
    }

    const [result, setResult] = useState([]);
    const [carta, setCarta] = useState([]);
    const [temResposta, setTemResposta] = useState(false);
    const [userQuery, setUserQuery] = useState(inicialState);
    const [links, setLinks] = useState([]);
    const [pages, setPages] = useState([]);

    let numberNoImageResults = 0;

    async function pagination(response) {
        setLinks(headersToLinks(response.headers.link));
        setPages(headersToPages(response.headers.link));
        setResult(response.data.cards);
    }

    function onChangeByUser(props) {
        setUserQuery({ ...userQuery, [props.name]: props.value })
    }

    function santaClaus() {
        AxiosSearch(userQuery.funcao, userQuery.user)
            .then(response => {
                pagination(response);
            })
    }

    function clearNoImageResults(array) {
        const filterResult = array.filter((onecard) => onecard.imageUrl !== undefined);
        numberNoImageResults = (array.length - filterResult.length);
        return filterResult;

    }

    useEffect(() => { 
        OneCard()
            .then(res => {
                setCarta(res);
                setTemResposta(true);
            })
    },
        []);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <>
                        {!temResposta ? <Loading /> : <Renderonecard output={[carta]} />}
                        <div className="user-input">
                            <h1>Search card by:</h1>
                            <Userstringinput data={userQuery.user} ChangeMe={onChangeByUser} />
                            <SelectSearchParameter ChangeMe={onChangeByUser} />
                            <Christmasbutton ClickMe={santaClaus} />
                        </div>
                    </>
                }>
                </Route>
                <Route path="/searchresults" element=
                    {result.length > 0 && <SearchResults output={clearNoImageResults(result)} number={numberNoImageResults} pages={pages} links={links} up={pagination} />}
                >
                    <Route path=":cardId" element={<Player output={clearNoImageResults(result)} />} />
                </Route>
                <Route path="*" element={<h1>I got nothing! And you?!</h1>} />
            </Routes>
        </BrowserRouter>
    )
};

export default Main;