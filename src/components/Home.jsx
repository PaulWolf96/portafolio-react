import LogoPerfil from '../img/perfil.png';
import ImgCorreo from '../img/imagenCorreo.jpg';
import { motion } from "framer-motion";
import '../../node_modules/animate.css';
import '../styles/home.css';
import Carousel from './Carousel';
import Cards from './Cards';




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
          <p>¡Hola, bienvenido a mi portafolio!<br />
            Estoy buscando mi primera experiencia laboral como desarrollador web. Tengo muchas ganas de entrar al mundo IT y
            poder crecer en él ya que siempre me interesó la programación.
          </p>
        </div>
      </section>

      <article>
        <section className="section-skills" id='section-skills'>
          <div className="flecha">
            <h4>Tecnologías que manejo</h4>
            <i className="fa-solid fa-arrow-down fa-xl"></i>
            <br /><br />
          </div>
          <Carousel />
        </section>


        <section className="section-projects" id='section-projects'>
          <h4>Visita mis proyectos</h4>
          <motion.div className="container"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
              <Cards />
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