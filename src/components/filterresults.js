import '../styles/userstringinput.css';

const Filterresults = (props) => {
    return (
        <input
            type="search"
            placeholder="Filter results (only name)"
            onChange={(e) => {
                props.changeMe(e.target.value)
                // console.log(e.target.value)
            }
            } 

        />
    )

};

export default Filterresults;