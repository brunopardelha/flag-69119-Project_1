import '../styles/selectsearchparameter.css'

const SelectSearchParameter = (props) => {

    const searchParameter = [
        "Name",
        "Type",
        "Power",
        "Rarity",
        "Toughness",
        "Colors"
    ]

    const renderSearchParameter = searchParameter.map((parameter) => {
        return (<option value={parameter} key={parameter}>{parameter}</option>)
    });


    return (
        <select
            name="funcao"
            defaultValue={searchParameter[0]}
            onChange={(e) => {
                props.ChangeMe(e.target)
            }}
        >
            {renderSearchParameter}
        </select>

    )

};

export default SelectSearchParameter;