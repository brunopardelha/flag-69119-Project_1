import '../styles/userstringinput.css'

const Userstringinput = (props) => {

    return(
        <input
            type="text"
            placeholder="Search parameter"
            name="user"
            value={props.data}
            onChange={(e) => {
                props.ChangeMe(e.target)
            }}
        ></input>
    )

};

export default Userstringinput;

