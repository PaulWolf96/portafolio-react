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
import RedSocialImg from '../img/miniredsocial.png';
import RelojDigitalImg from '../img/relojdigital.png';
import AppTareaImg from '../img/app-tarea.png';
import CineCalidadImg from '../img/cinecalidad.png';
import ImgCorreo from '../img/imagenCorreo.jpg';
import '../../node_modules/animate.css';
import '../styles/home.css';




const Home = () => {
  return (
    <main>
      <section className="section-info">
        <div className='animate__animated animate__backInDown' style={{ display: 'flex', justifyContent: 'center' }}>
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
        </div>
      </section>

      <article>
        <section className="section-skills" id='section-skills'>
          <div className="flecha">
            <h4>Estas son las tecnologías que manejo</h4>
            <i className="fa-solid fa-arrow-down fa-xl"></i>
            <br /><br />
          </div>
          {/* carrousel */}
          <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={HtmlLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo html" /></div>
                  <div className="col d-flex align-items-center"><img src={CssLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo css" /></div>
                  <div className="col d-flex align-items-center"><img src={JsLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo JS" /></div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={BootstrapLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo bootstrap" /></div>
                  <div className="col d-flex align-items-center"><img src={ReactLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo react" /></div>
                  <div className="col d-flex align-items-center"><img src={NodeLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo nodejs" /></div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={MongoLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo mongodb" /></div>
                  <div className="col d-flex align-items-center"><img src={GitLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo git" /></div>
                  <div className="col d-flex align-items-center"><img src={GithubLogo} width="110px"
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

        <section className="section-projects" id='section-projects'>
          <h4>Visitá mis páginas y proyectos</h4>
          <div className="container d-flex justify-content-between cards">
            <div className="card" style={{ width: '18rem' }}>
              <img src={RedSocialImg} className="card-img-top" alt="imagen app" />
              <div className="card-body">
                <h5 className="card-title">Mini Red Social</h5>
                <p className="card-text">Mini red social con react, bootstrap y localStorage. Se puede crear usuarios, publicar imágenes y hacer comentarios</p>
                <div className='div-btn-info'> 
                  <a href="https://mini-red-social.vercel.app/" target="_blank" className="btn btn-info">Visitar</a>
                  <a href="https://github.com/PaulWolf96/mini-red-social" target="_blank" className="btn btn-info">Ver Código</a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src={AppTareaImg} className="card-img-top" alt="imagen app" />
              <div className="card-body">
                <h5 className="card-title">Mis Tareas</h5>
                <p className="card-text">App sencilla para crear tareas, con react y localStorage. Posibilidad para marcar como completadas y eliminarlas.</p>
                <div className='div-btn-info'>
                  <a href="https://app-mistareas.vercel.app/" target="_blank" className="btn btn-info">Visitar</a>
                  <a href="https://github.com/PaulWolf96/app-mistareas" target="_blank" className="btn btn-info">Ver Código</a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src={RelojDigitalImg} className="card-img-top" alt="imagen app" />
              <div className="card-body">
                <h5 className="card-title">Reloj Digital</h5>
                <p className="card-text">App que muestra la hora actual en un reloj digital. <br /> Hecho con react.</p>
                <div className='div-btn-info'>
                  <a href="https://app-reloj-digital.vercel.app/" target="_blank" className="btn btn-info">Visitar</a>
                  <a href="https://github.com/PaulWolf96/app-reloj-digital" target="_blank" className="btn btn-info">Ver Código</a>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex cards">
            <div className="card" style={{ width: '18rem' }}>
              <img src={CineCalidadImg} className="card-img-top" alt="imagen app" />
              <div className="card-body">
                <h5 className="card-title">Neci-Calidad</h5>
                <p className="card-text">Clon de la página de películas "Cinecalidad". Hecha con React, React-router-dom, contextAPI y usando la API pública Themoviedb.</p>
                <div className='div-btn-info'>
                  <a href="https://neci-calidad.vercel.app/" target="_blank" className="btn btn-info">Visitar</a>
                  <a href="https://github.com/PaulWolf96/Neci-Calidad" target="_blank" className="btn btn-info">Ver Código</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-contact" id='section-contact'>
          <div className='div-img-correo animate__animated animate__backInUp'>
            <img src={ImgCorreo} className='img-correo' alt="imagen correo" />
          </div>
          <div className='div-form'>
            <h3>Contactame!</h3>
            <form action="https://formsubmit.co/12aa1a5a544b4f5dd1253d57ea3c9b75" method="POST">
              <div className="mb-3">
                <input type="text" className="form-control" name="name" id="Name" rows="1" placeholder="Nombre" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="email" id="Email" aria-describedby="emailHelp"
                  placeholder="Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="comentario" id="Textarea" rows="5"
                  placeholder="Dejame un comentario..." required />
              </div>
              <button type="submit" className="btn btn-secondary w-100">Enviar</button>
            </form>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Home;