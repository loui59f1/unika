import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer_grid container">
                <div className="column contact">
                    <h3>Kontakt</h3>
                    <ul>
                        <li>info@unika.dk</li>
                        <li>Søllerødgårdsvej 19B</li>
                        <li>2840 Holte</li>
                        <li>Danmark</li>
                        <li>+45 6166 7000</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Quicklinks</h3>
                    <ul>
                        <li><Link to="/about">Om Unika K</Link></li>
                        <li><Link to="/contact">Kontakt os</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/about">Handelsbetingelser</Link></li>
                        <li><Link to="/about">Kundeservice</Link></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Kategorier</h3>
                    <ul>
                        <li><Link to="/productlist">Kopper</Link></li>
                        <li><Link to="/productlist">Tallerkener</Link></li>
                        <li><Link to="/productlist">Julepynt</Link></li>
                        <li><Link to="/productlist">Udsalg</Link></li>
                    </ul>
                </div>
                <div>
                    <img src={`../img/footer_logo.svg`} />
                    <div className="footer_logos">
                        <a href="#"><img src={`../img/facebook_icon.svg`} /></a>
                        <a href="#"><img src={`../img/pinterest_icon.svg`} /></a>
                        <a href="#"><img src={`../img/instagram_icon.svg`} /></a>
                    </div>
                </div>
            </div>
            <div className="bottom_bar">
                <div className="container">
                    <div className="payment_logos">
                        <img src={`../img/payment_logos.svg`} />
                    </div>
                    <div>
                        <p>Copyright © Unika K - 2021</p>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;