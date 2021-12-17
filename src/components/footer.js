import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="container rodape">
            <div className="footer">
                <h1>Copyright &copy; 2021</h1>
                <h2>by Bruno Pardelha</h2>
                <p> 
                    <a
                        href="https://magic.wizards.com/en"
                        target="_blank"
                        rel="noreferrer"
                    > +info on the game (Magic Gathering) </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;