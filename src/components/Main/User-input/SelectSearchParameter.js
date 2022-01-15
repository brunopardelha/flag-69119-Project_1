import '../../../styles/Main/User-input/selectsearchparameter.css';

const SelectSearchParameter = (props) => {

    const searchParameter = [
        "Colors",
        "Name",
        "Power",
        "Rarity",
        "Set",
        "Toughness",
        "Type"
    ]

    const renderSearchParameter = searchParameter.map((parameter) => {
        return (<option value={parameter} key={parameter}>{parameter}</option>)
    });

    return (
        <select
            name="funcao"
            defaultValue={searchParameter[1]}
            onChange={(e) => {
                props.ChangeMe(e.target)
            }}
        >
            {renderSearchParameter}
        </select>
    )
};

export default SelectSearchParameter;