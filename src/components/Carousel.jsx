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


const Carousel = () => {
  return (
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
  )
}

export default Carousel;