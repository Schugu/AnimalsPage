import LinkSection from "./LinkSection.tsx";
export default function Header() {
  return (
    <article className="flex flex-wrap justify-between items-center p-2.5 gap-2
    bg-red-200">
      <a href="#" className="flex justify-center items-center gap-1 text-3xl">
        <span className="icon-[mdi--paw]" />
        <p className="font-bold">Animales</p>
      </a>

      <div className="flex flex-wrap gap-4 text-2xl">
        <LinkSection linkTo="#" icono="icon-[ic--baseline-groups]" label="Sobre Nosotros" />
        <LinkSection linkTo="#" icono="icon-[ic--baseline-person-add]" label="Registrarse" />
        <LinkSection linkTo="#" icono="icon-[ic--baseline-account-circle]" label="Acceder" />
      </div>
    </article>
  )
}
