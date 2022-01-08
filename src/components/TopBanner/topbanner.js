import '../../styles/TopBanner/topbanner.css'
import logo from '../../img/kisspng-magic-the-gathering-online-dungeons-dragons-wiz-wizard-5ab9952450b746.1442340915221117803306.png';

const TopBanner = () => {
    return (
        <a
            href="https://magic.wizards.com/en"
            target="_blank"
            rel="noreferrer"
        >
            <img src={logo} alt="logo wizards of the coast" />
        </a>


    )
}

export default TopBanner;