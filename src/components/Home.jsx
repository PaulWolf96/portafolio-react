import LogoPerfil from '../img/perfil.png';
import '../styles/home.css';

const Home = () => {
  return (
    <main>
      <section className="info">
        <div className="img-perfil">
          <img src={LogoPerfil} alt="foto perfil" />
        </div>
        <div className="descripcion-general">
          <h1>Pablo Leonardo Lobo</h1>
          <i className="subtitulo">Front End | React</i>
          <p>"Hola, Bienvenido a mi Portafolio!<br />
            Estoy buscando mi primer experiencia laboral como desarrollador web, tengo muchas ganas de entrar al mundo IT y
            poder crecer en él ya que siempre me interesó la programación."
          </p>
        </div>
      </section>

      <section className="skills">Skills</section>

      <section className="projects">Projects</section>
    </main>
  )
}

export default Home;