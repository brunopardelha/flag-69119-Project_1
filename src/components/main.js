import '../styles/main.css'
import api from '../api/mtg.js'
import { useState } from 'react';
import SelectSearchParameter from './SelectSearchParameter'

const Main = () => {

    const handleClick = (props) => {
        console.log(props);
        switch (props.funcao) {
            case 'Name':
                api.SearchByName(props.user)
                //Anchorite
                break;
            case 'Type':
                api.SearchByType(props.user);
                break;
            case 'Power':
                api.SearchByPower(props.user);
                break;
            case 'Rarity':
                api.SearchByRarity(props.user);
                break;
            case 'Toughness':
                api.SearchByToughness(props.user);
                break;
            case 'Colors':
                api.SearchByColor(props.user);
                break;
            default:
                console.log('o que entrou na função handleclick', props);
                break;
        }
    }

    // let handleChange = (props) => {
    //     console.log(props)
    // }

    //FIXME pensar em 1 helper no userinput para valores múltiplos

    const inicialState = {
        user: "",
        funcao: "Name",
    }

    
    const [result, setResult] = useState([]);
    const cartas = result.map((carta) => <li key={carta.id}><a href={carta.imageUrl}>{carta.name}</a> from set {carta.setName}</li>)
    
    const [userQuery, setUserQuery] = useState(inicialState)
    
    const onChangeUserQueryFuncao = (props) => {
        setUserQuery({ ...userQuery, [props.name]: props.value })
    }

    return (
        <div className="main">
            <h1>Search card by:</h1>
            <input
                type="text"
                placeholder="teste duas variaveis"
                name="user"
                value={userQuery.user}
                onChange={e => {
                    setUserQuery({ ...userQuery, [e.target.name]: e.target.value })
                }}
            ></input>
            {/* <select
                name="funcao"
                onChange={(e) => {
                    setUserQuery({ ...userQuery, [e.target.name]: e.target.value })
                }}>
               
            </select> */}
            <SelectSearchParameter ChangeMe={onChangeUserQueryFuncao}/>
            <button
                type="submit"
                onClick={() => {
                    // handleClick(userQuery)
                    api.Search(userQuery.funcao, userQuery.user)
                        .then(res => {
                            console.log(res);
                            setResult(res)
                        })
                }}
            >go fetch
            </button>
            <hr className="split"/>
            <div className="results">

                {result.length>0 && <ul>{cartas}</ul>}

            </div>

        </div>
    )
};

//TODO pensar em fazer um helper para ler o input do user e fazer procuras múltiplas

export default Main;