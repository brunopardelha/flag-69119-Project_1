import '../styles/navigationresults.css'

const Navigationresults = (props) => {
    //provavelmente a string para trabalhar os botões
    // console.log(props);
    
    const buttons = props.navigation.map((button) => {
        return (
            <button type='button' onClick={() => console.log('cliked ' + button)}>{button}</button>
        )
    })

    return (
        <div className="navigation">
            {buttons}
        </div>
    )

};

export default Navigationresults;