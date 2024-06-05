import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Card from "./components/card/Card.tsx";
import {infoAnimals, InfoAnimal} from "./components/card/animals.ts";

export default function App() {
  return (
    <section>
      <Header />

      <main className="flex flex-col gap-2 min-h-screen bg-[#f8edeb] p-2.5">
        <section className="flex items-center flex-wrap justify-center gap-2">
          <h2 className="text-2xl">ELIGE UN ANIMAL</h2>
          <img className="w-12 h-12" src='/Iguana.png' alt="iguanaIco" />
        </section>

        <section className="flex flex-wrap justify-center gap-14">
          {
            infoAnimals.map((animal:InfoAnimal) => (
              <Card nombre={animal.nombre} link={animal.link} parrafo={animal.parrafo}/>
            ))
          }
        </section>
      </main>

      <Footer />
    </section>
  )
}
