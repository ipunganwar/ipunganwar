import '../styles/nav.css'

export default function nav () {
  return (
    <nav>
      <h3 className='logo'>&lt; ipunganwar &gt;</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li></li>
      </ul>
    </nav>
  )
}