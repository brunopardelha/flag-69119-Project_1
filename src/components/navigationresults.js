import '../styles/navigationresults.css';


const Navigationresults = (props) => {
    //provavelmente a string para trabalhar os botões
    // console.log(props.links);

    const buttons = props.navigation.map((button, index) => {
        // console.log(links[index]);
        return (
            <button
                type='button'
                key={index}
                onClick={() => {
                    console.log('cliked ' + button);
                    // CardByRequest(props.links[index])
                    //     .then(res => (res))
                    // console.log(props.links[index])
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
        </div>
    )
};

export default Navigationresults;