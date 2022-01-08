import '../../../../styles/Main/User-input/userstringinput.css';

const Filterresults = (props) => {
    return (
        <input
            type="search"
            placeholder="Filter results (name only)"
            onChange={(e) => {
                props.changeMe(e.target.value)
            }
            } 
        />
    )
};

export default Filterresults;