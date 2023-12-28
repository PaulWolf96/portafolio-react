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
import { motion } from "framer-motion";
import '../../node_modules/animate.css';
import '../styles/home.css';
import Card from './Card';



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
        <section className="section-skills" id='section-skills'>
          <div className="flecha">
            <h4>Tecnologías que manejo</h4>
            <i className="fa-solid fa-arrow-down fa-xl"></i>
            <br /><br />
          </div>
          {/* carrousel */}
          <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={HtmlLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo html" /></div>
                  <div className="col d-flex align-items-center"><img src={CssLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo css" /></div>
                  <div className="col d-flex align-items-center"><img src={JsLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo JS" /></div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="row">
                  <div className="col d-flex align-items-center"><img src={BootstrapLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo bootstrap" /></div>
                  <div className="col d-flex align-items-center"><img src={ReactLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo react" /></div>
                  <div className="col d-flex align-items-center"><img src={NodeLogo} width="110px"
                    className="d-block mx-auto logo-carrusel" alt="logo nodejs" /></div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
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
          <h4>Visita mis proyectos</h4>
          <motion.div className="container"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
            <div className="row row-cols-1 row-cols-md-3 gy-5">
              <Card 
                img={RedSocialImg}
                title="Mini Red Social"
                text="Mini red social con react, bootstrap y localStorage. Se puede crear usuarios, publicar imágenes y hacer comentarios"
                linkDeploy="https://mini-red-social.vercel.app/"
                linkCode="https://github.com/PaulWolf96/mini-red-social"
              />
              <Card 
                img={AppTareaImg}
                title="Mis Tareas"
                text="App sencilla para crear tareas, con react y localStorage. Posibilidad para marcar como completadas y eliminarlas."
                linkDeploy="https://app-mistareas.vercel.app/"
                linkCode="https://github.com/PaulWolf96/app-mistareas"
              />
              <Card 
                img={RelojDigitalImg}
                title="Reloj Digital"
                text={
                  <>
                    App que muestra la hora actual en un reloj digital. <br />
                    Hecho con React
                  </>
                }
                linkDeploy="https://app-reloj-digital.vercel.app/"
                linkCode="https://github.com/PaulWolf96/app-reloj-digital"
              />
              <Card 
                img={CineCalidadImg}
                title="Neci-Calidad"
                text="Clon de la página de películas 'Cinecalidad'. Hecha con React, React-router-dom, contextAPI y usando la API pública Themoviedb."
                linkDeploy="https://neci-calidad.vercel.app/"
                linkCode="https://github.com/PaulWolf96/Neci-Calidad"
              />
            </div>
          </motion.div>
        </section>


        <section className="section-contact" id='section-contact'>
          <h4>Contactame!</h4>
          <div className='div-container-contact'>
            <div className='div-img-correo'>
              <img src={ImgCorreo} className='img-correo' alt="imagen correo" />
            </div>
            <motion.div className='div-form'
              initial={{ x: 400, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1.5 }}
            >
              <form action="https://formsubmit.co/12aa1a5a544b4f5dd1253d57ea3c9b75" method="POST">
                <div className="mb-3">
                  <input type="text" className="form-control-lg" name="name" id="Name" rows="1" placeholder="Nombre" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control-lg" name="email" id="Email" aria-describedby="emailHelp"
                    placeholder="Email" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control-lg" name="comentario" id="Textarea" rows="4"
                    placeholder="Comentario..." required />
                </div>
                <button type="submit" className="btn btn-info w-100">Enviar</button>
              </form>
            </motion.div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Home;