// import ''
import { useNavigate } from "react-router-dom";

const Previousbutton = () => {

    const navigate = useNavigate();

    return(
         <p href="#" onClick={() => navigate(-1)} style={{ color: "white", cursor: "pointer", textDecoration: "underline"}}>Go back</p>
    )
}

export default Previousbutton;