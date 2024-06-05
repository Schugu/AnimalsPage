import LinkSection from "../LinkSection.tsx";
export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between items-center p-2.5 gap-2
    bg-gray-400 text-xl">


      <div className="flex flex-wrap gap-1 justify-center items-center">
        <span className="icon-[ic--baseline-copyright]" />
        <p>2024</p>
      </div>

      <LinkSection
        linkTo="#header"
        icono="icon-[ic--baseline-arrow-upward]"
        label="Volver arriba"
      />

      <p className="">leo.schugu@gmail.com</p>

    </footer>
  )
}
