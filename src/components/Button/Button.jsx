export default function Button({ link, name, color }) {
  return (
    <a
      href={link}
      target="_blank"
      className={`px-3 py-3 ${color} rounded-lg text-white`}>
      {name}
    </a>
  )
}