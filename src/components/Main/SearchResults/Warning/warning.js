import '../../../../styles/Main/SearchResults/Warning/aviso.css'

const Warning = (props) => {
    return(
        <div className="hidecarts">
            <h2>{props.number} unshow card(s) (No image).</h2>
        </div>
    )
};

export default Warning;