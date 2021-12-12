import { useState } from "react";

const Inputbox = (props) => {

    const placeholderMessage = "Enter " + props.tipo.toLowerCase() + " for search...";

    const searchP = {
        funcao: props.tipo,
        user: '' // anchorite
    }

    const [userInput, setUserInput] = useState(searchP);

    return (
        <li>
            <input
                type="text"
                value={userInput.user} //valor por defeito
                name="user" // nome do input
                placeholder={placeholderMessage}
                onChange={
                    e => setUserInput({ ...userInput, [e.target.name]: e.target.value })}
            ></input>
            <button 
                type="submit"
                onClick={() => {
                    props.clickMe(userInput)
                }}>Submit {props.tipo}
            </button>
        </li>
    )

};

export default Inputbox;