import iconsArray from "../../Data/homeIcons"

export default function Icons() {
  return (
    <>
      {iconsArray.map((icon, index) => {
        return (<img key={index} src={icon} alt="Home icons" />)
      })}
    </>
  )
}