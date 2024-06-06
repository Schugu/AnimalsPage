import { useState } from "react";
import './card.css'; // Asegúrate de importar tu archivo CSS

type CardProps = {
  nombre: string;
  link: string;
  parrafo: string;
  key: string;
}

export default function Card({ nombre, link, parrafo }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article onClick={() => { setIsFlipped(!isFlipped) }}
      className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''} shadow cursor-pointer`}>
        <div className="front w-full h-full p-2.5 flex flex-col gap-2 items-center justify-between">
          <section className="w-full h-4/6">
            <img className="w-full h-full object-cover object-center rounded-lg" src={`/ImgAnimales/${nombre}.jpg`} alt={nombre} />
          </section>
          <section className="w-full h-2/6 flex justify-center items-center">
            <p className="w-fit text-[#f79a8e] text-4xl drop-shadow">
              {nombre}
            </p>
          </section>
        </div>

        <div className="back w-full h-full p-2.5 flex flex-col gap-2 items-center">
          <a className="w-full text-center text-[#f79a8e] text-2xl hover:bg-red-50 rounded" href={link} target="_blank">
            <p className="border-b-2 border-gray-700">{nombre}</p>
          </a>
          <p className="text-black overflow-auto text-balance">
            {parrafo}
          </p>
        </div>
      </div>
    </article>
  )
}
