import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ListCard from './ListCard';

const Cards = () => {

  const [activeCard, setActiveCard] = useState(null);
  const [cards] = useState(ListCard);


  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  return (
    activeCard ? 
        <AnimatePresence> 
          <motion.div className='container-card-clicked' >
            <motion.div
              className="card-modal card h-100 m-3 card-clicked"
              style={{ width: '18rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 100 }}
              exit={{ opacity: 0 }} >
              <img src={activeCard.img} className="card-img-top" alt="imagen app" />
              <div className="card-body">
                <h5 className="card-title">{activeCard.title}</h5>
                <motion.div>
                  <p className="card-text"> {activeCard.text}</p>
                  <div className='div-btn-info'>
                    <a href={activeCard.linkDeploy} target="_blank" className="btn btn-info">Visitar</a>
                    <a href={activeCard.linkCode} target="_blank" className="btn btn-info">Código</a>
                  </div>
                </motion.div>
              </div>
              <button onClick={handleCloseCard}>Cerrar</button>
            </motion.div>
          </motion.div>
      </AnimatePresence>
      
      :

      
        <motion.div className='container d-flex'>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="card h-100 p-0 m-3" style={{ width: '16rem', opacity: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              layout: {
                duration: 1,
                type: "spring"
              }
            }}
            layout
            onClick={() => handleCardClick(card)}
          >
            <img src={card.img} className="card-img-top" alt="imagen app" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
            </div>
          </motion.div>
        ))}
      </motion.div>  
  )  
}


export default Cards;