import LogoPerfil from '../img/perfil.png';
import Globito from '../img/globito-dialogo.png';
import HtmlLogo from '../img/htmlLogo.png';
import CssLogo from '../img/cssLogo.png';
import JsLogo from '../img/javascriptLogo.png';
import ReactLogo from '../img/reactLogo.png';
import BootstrapLogo from '../img/bootstrapLogo.png';
import NodeLogo from '../img/nodeLogo.png';
import GitLogo from '../img/gitLogo.png';
import GithubLogo from '../img/githubLogo.png';
import MongoLogo from '../img/mongoLogo.png';
import NextLogo from '../img/nextIcon.png';
import '../../node_modules/animate.css';
import '../styles/home.css';


const Home = () => {


  

  return (
    <main>
      <section className="section-info">
        <div className="img-perfil">
          <img src={LogoPerfil} alt="foto perfil" />
        </div>
        <div className="descripcion-general">
          <h1>Pablo  Leonardo  Lobo</h1>
          <i className="subtitulo">Front End | React</i>
          <p>"Hola, Bienvenido a mi Portafolio!<br />
            Estoy buscando mi primer experiencia laboral como desarrollador web, tengo muchas ganas de entrar al mundo IT y
            poder crecer en él ya que siempre me interesó la programación."
          </p>
          <img src={Globito} alt="" className="img-globito" width="600px"></img>
        </div>
      </section>

      <article>
        <section className="section-skills">
          {/* carrousel */}
          <div className="flecha">
            <h4>Estas son las tecnologías que manejo</h4>
            <i className="fa-solid fa-arrow-down fa-xl"></i>
            <br /><br />
          </div>
          <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="4000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={HtmlLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo html" /></div>
                  <div className="col d-flex align-items-center"><img src={CssLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo css" /></div>
                  <div className="col d-flex align-items-center"><img src={JsLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo JS" /></div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={BootstrapLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo bootstrap" /></div>
                  <div className="col d-flex align-items-center"><img src={ReactLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo react" /></div>
                  <div className="col d-flex align-items-center"><img src={NodeLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo nodejs" /></div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={MongoLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo mongodb" /></div>
                  <div className="col d-flex align-items-center"><img src={GitLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo git" /></div>
                  <div className="col d-flex align-items-center"><img src={GithubLogo} width="100px"
                    className="d-block mx-auto logo-carrusel" alt="logo github" /></div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span><img src={NextLogo} alt="next" width="25px" /></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section className="section-projects">Projects</section>
      </article>

    </main>
  )
}

export default Home;