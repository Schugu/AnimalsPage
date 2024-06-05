import { useState } from "react";

type CardProps = {
  nombre: string;
  link: string;
  parrafo: string;
}

export default function Card({ nombre, link, parrafo }: CardProps) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <article onClick={() => { setIsHidden(!isHidden) }}
      className="flex flex-col justify-between text-center w-72 h-72 shadow-md rounded-lg bg-[#f2f2f2] cursor-pointer hover:bg-gray-200">
      <div className={`w-full h-full p-2.5 flex flex-col gap-2 items-center justify-between ${isHidden ? 'hidden' : ''}`}>
        <section className="w-full h-4/6">
          <img className="w-full h-full object-cover object-center rounded-lg" src={`/ImgAnimales/${nombre}.jpg`} alt={nombre} />
        </section>
        <section className="w-full h-2/6 flex justify-center items-center">
          <p className="w-fit text-[#f79a8e] text-4xl drop-shadow">
            {nombre}
          </p>
        </section>
      </div>

      <div className={`w-full h-full p-2.5 flex flex-col gap-2 items-center justify-between ${!isHidden ? 'hidden' : ''}`}>
        <a className="text-[#f79a8e] text-2xl hover:shadow" href={link} target="_blank">
          <p>{nombre}</p>
        </a>

        <p className="text-black">
          {parrafo}
        </p>
      </div>
    </article>
  )
}
