import '../../../styles/Main/Player/previousbutton.css';

import { useNavigate } from "react-router-dom";

const Previousbutton = () => {

    const navigate = useNavigate();

    return(
         <p className="undo" onClick={() => navigate(-1)}>Go back</p>
    )
}

export default Previousbutton;