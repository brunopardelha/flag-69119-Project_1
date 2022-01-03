import '../styles/navigationresults.css';

const Navigationresults = (props) => {

    const buttons = props.navigation.map((button, index) => {
        return (
            <button
                type='button'
                key={index}
                onClick={() => {
                    props.clickedButton(props.links[index])
                }
                }
            >
                {button.charAt(0).toUpperCase() + button.slice(1)}</button>
        )
    })

    return (
        <div className="navigation">
            {buttons}
            <button type="button"><a href='#top'>Top</a></button>
        </div>
    )
};

export default Navigationresults;