import './Footer.css'

import CopyrightIco from './Icons/copyrightIco.svg'
import ContactIco from './Icons/contactIco.svg'
import HomeIco from './Icons/homeIco.svg'

export function Footer() {
    return (
    <footer className="footer">
        <div className="footerContent">
            <div className="linkFooter">
                <img className="linkFooter__img" src={CopyrightIco} alt="CopyrightIco"/>
                <p className="footer__p">Copyright - Todos los derechos reservados</p>
            </div>

            <div className="linkFooter">
                <img className="linkFooter__img" src={ContactIco} alt="ContactIco"/>
                <a href="https://www.instagram.com/leanschugu/" target="_blank" rel="nofollow" className="linkFooter__a">Contacto</a>
            </div>

            <div className="linkFooter">
                <img className="linkFooter__img" src={HomeIco} alt="HomeIco"/>
                <a className="linkFooter__a" href="#header">Inicio</a>      
            </div>           
        </div>
    </footer>
    )
}


