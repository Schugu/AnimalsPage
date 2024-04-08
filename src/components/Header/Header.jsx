import './Header.css'
import homeIco from './icons/homeIco.svg'
import pawIco from './icons/pawIco.png'
import groupIco from './icons/groupIco.svg'
import addPeopleIco from './icons/addPeopleIco.svg'
import accountCircleIco from './icons/accountCircleIco.svg'

export function Header() {
    return (
        <header className="header" id="header">
        <a className="linkHeader" href="#">
            <img src={homeIco} alt="HomeIco"/>
            <span>Inicio</span>
        </a>
        <div className="tituloPagina">
            <h1 className="tituloPagina">Animales</h1>
            <img className="tituloPaginaImg" src={pawIco} alt="patita"/>
        </div>
        <nav className="header__Nav">
            <a href="#" className="linkHeader">
                <img className="linkHeader__img" src={groupIco} alt="GroupIco"/>
                <span>Sobre nosotros</span>    
            </a>
            <a href="#" className="linkHeader">
                <img className="linkHeader__img" src={addPeopleIco} alt="PersonaIco"/>
                <span>Registrarse</span>
            </a>
            <a href="#" className="linkHeader">
                <img className="linkHeader__img" src={accountCircleIco} alt="acountCircle"/>
                <span>Acceder</span>
            </a>
        </nav>
      </header>
    )
}