import iconsArray from "../../Data/homeIcons"

export default function Icons() {
  return (
    <>
      <div className="grid grid-cols-3 w-60 gap-2  justify-center items-center">
        {iconsArray.map((icon, index) => {
          return (<img key={index} src={icon} className="rounded-lg hover:transform hover:-translate-y-1 hover:-translate-x-1 hover:duration-200" alt="Home icons" />)
        })}
      </div>
    </>
  )
}