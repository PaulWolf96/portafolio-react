import LogoPerfil from '../img/perfil.png';
import Globito from '../img/globito-dialogo.png';
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

      <section className="section-skills">Skills</section>

      <section className="section-projects">Projects</section>
    </main>
  )
}

export default Home;