import '../../../styles/Main/Player/previousbutton.css';

import { Link } from "react-router-dom";

const Previousbutton = () => {

    return(
         <Link className="undo" to="/searchresults">Go back</Link>
    )
}

export default Previousbutton;