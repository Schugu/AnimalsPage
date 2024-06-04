
type LinkSectionProps = {
  linkTo: string,
  icono: string,
  label: string,

}

export default function LinkSection({linkTo, icono, label}: LinkSectionProps) {
  return (
    <a href={linkTo} className="flex justify-center items-center gap-1 
    hover:text-red-50 hover:drop-shadow-sm transition duration-15000 ease-in-out">
      <span className={`${icono}`} />
      <p>{label}</p>
    </a>
  )
}
