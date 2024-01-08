import '../styles/header.css';
import { IoHome } from "../../node_modules/react-icons/io5";
import { IoConstruct } from "react-icons/io5";
import { IoAlbums } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import '../../node_modules/animate.css';
import LinkAnimation from './LinkAnimation';



const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-md">
        <div className="container-fluid p-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <LinkAnimation href='#' >
                  <IoHome size='17' />Inicio
                </LinkAnimation>
              </li>
              <li className="nav-item">
                <LinkAnimation href='#section-skills' >
                  <IoConstruct />Habilidades
                </LinkAnimation>
              </li>
              <li className="nav-item">
                <LinkAnimation href='#section-projects' >
                  <IoAlbums />Proyectos
                </LinkAnimation>
              </li>
              <li className="nav-item">
                <LinkAnimation href='#section-contact' >
                  <IoMail />Contacto
                </LinkAnimation>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;