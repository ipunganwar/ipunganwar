import { Fragment } from "react"
import html from '../icons/html.png'
import react from '../icons/react.png'
import "../styles/home.css"

export default function Home () {
  return (
    <Fragment>
      <section className="home">
        <div className="container">
          <div className="content">
            <div className="hero-text">
              <h2>Hi, I'm Syaiful Anwar. A passionate Front-end Javascript Developer based in Jakarta, Indonesia 📍.</h2>
              <span>
                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/syaiful-anwar-06a5aba7/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/ipunganwar">
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src={html} alt="html"/>
                  </li>
                  <li>
                    <img src={react} alt="html"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
} 
