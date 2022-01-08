import '../../../styles/Main/User-input/christmasbutton.css';

import { Link } from 'react-router-dom';

const Christmasbutton = (props) => {

    return (
        <Link
            to='/searchresults'
            className="button"
            onClick={() => {
                props.ClickMe();
            }}
        >Presents
        </Link>
    )
};

export default Christmasbutton;