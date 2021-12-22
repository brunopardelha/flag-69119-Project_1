import '../styles/navigationresults.css'

const Navigationresults = (props) => {
    //provavelmente a string para trabalhar os botões
    // console.log(props);
    
    const buttons = props.navigation.map((button, index) => {
        return (
            <button type='button' key={index} onClick={() => console.log('cliked ' + button)}>{button.charAt(0).toUpperCase()+button.slice(1)}</button>
        )
    })

    return (
        <div className="navigation">
            {buttons}
        </div>
    )
};

export default Navigationresults;