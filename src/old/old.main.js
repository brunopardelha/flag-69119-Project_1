import '../styles/main.css'
import api from '../api/mtg.js'
import Inputbox from '../components/inputbox'

const Main = () => {

    const handleClick = (props) => {
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
            case 'Color':
                console.log(props.user);
                api.SearchByColor(props.user);
                break;
            default:
                console.log('o que entrou na função handleclick', props);
                break;
        }
    }

    let handleChange = (props) => {
        console.log(props)
    }

    //TODO mudar inputbox do type para select
    //TODO mudar inputbox do rare para select
    //FIXME pensar em 1 helper no userinput para multiple valores

    let input;

    return (
        <div className="main">
            <h1>Search card by:</h1>
            <ul className="searchinputs">
                <Inputbox tipo="Name" clickMe={handleClick} changeMe={handleChange} />
                <Inputbox tipo="Type" clickMe={handleClick} />
                <Inputbox tipo="Power" clickMe={handleClick} />
                <Inputbox tipo="Rarity" clickMe={handleClick} />
                <Inputbox tipo="Toughness" clickMe={handleClick} />
                <Inputbox tipo="Color" clickMe={handleClick} />
            </ul>
            <input 
                type="text" 
                placeholder="teste duas variaveis" 
                name="input"
            ></input>
            <button
                type="submit"
                value={input} 
                onClick={(e) => {
                    console.log(e.target.value)
                    // api.Search('Name', 'Bogardan' )
                }}
                >Click
            </button>
        </div>
    )
};

export default Main;