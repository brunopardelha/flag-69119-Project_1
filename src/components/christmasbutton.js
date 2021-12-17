import '../styles/christmasbutton.css';

const Christmasbutton = (props) => {

    return (
        <button
            type="submit"
            className="button"
            onClick={() => {
                props.ChangeMe();
            }}
        >Presents
        </button>
    )
};

export default Christmasbutton;