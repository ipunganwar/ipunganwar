export default function nav () {
  return (
    <div className='flex flex-wrap items-center justify-between top-0 w-full pt-10 px-6 pb-12 text-lg fixed shadow-lg font-semibold'>
      <h3>ipunganwar</h3>
      <ul className='flex list-none gap-8'>
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
    </div>
  )
}