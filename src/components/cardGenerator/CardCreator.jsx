import './CardCreator.css'
import iguanaIco from './Icons/Iguana.png'
import { informacion as animales } from './animales.js'

function handleClick(e) {
    e.currentTarget.classList.toggle("clicked");
}

function crearContenedorCard(imagenAnimal, nombrAnimal, linkAnimal, parrafoAnimal) {
    return (
        <section className='cardContainer' key={nombrAnimal} >
            <article className="cardAnimales" onClick={handleClick}>
                <div className="cardAnimalesFront">
                    <img className="cardAnimalesFront__img" src={imagenAnimal} alt={nombrAnimal}/>
                    <h2 className="cardAnimalesFront__h2">
                        {nombrAnimal}
                    </h2>
                </div>

                <div className="cardAnimalesBack">
                    <a className="linkCardAnimales" href={linkAnimal} target="_blank">
                        <b>{nombrAnimal}</b>
                    </a>
                    <hr />
                    <p className="cardAnimalesBack__P">
                        {parrafoAnimal}
                    </p>
                </div>
            </article>
        </section>
    )
}

function crearCard () {
     const cards = animales.map(animal => {
        return crearContenedorCard(animal.imagen, animal.nombre, animal.link, animal.parrafo);
    });
    return cards; 
}

export function CardCreator() {
    return (
        <main className="main">
            <div className="tituloCards">
                <h2 className="tituloCards__h2">ELIGE UN ANIMAL</h2>
                <img className="tituloCards__img" src={iguanaIco} alt="iguanaIco"/>
            </div>

            <div className="cartasAnimales">
                {crearCard()}
            </div>
      </main>
    )
}

