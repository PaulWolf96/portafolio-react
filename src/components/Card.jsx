import { motion } from "framer-motion";

const Card = ({img, title, text, linkDeploy, linkCode}) => {
  return (
      <motion.div className="col d-flex justify-content-center">
        <div className="card h-100" style={{ width: '18rem' }}>
          <img src={img} className="card-img-top" alt="imagen app" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {text}</p>
            <div className='div-btn-info'>
              <a href={linkDeploy} target="_blank" className="btn btn-info">Visitar</a>
              <a href={linkCode} target="_blank" className="btn btn-info">Código</a>
            </div>
          </div>
        </div>
      </motion.div>
  );
}

export default Card;