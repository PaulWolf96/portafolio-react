import '../styles/header.css';
import { IoHome } from "../../node_modules/react-icons/io5";
import { IoConstruct } from "react-icons/io5";
import { IoAlbums } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link fs-5 p-0" aria-current="page" href="#"><IoHome size='17' />Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 p-0" href="#"><IoConstruct />Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 p-0" href="#"><IoAlbums />Proyectos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;