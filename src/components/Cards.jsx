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
    <AnimatePresence>
      {activeCard && (
        <motion.div
          key="modal"
          className="container-card-clicked"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="card-modal card h-100 m-3"
            style={{ width: '18rem' }}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0, x: 200 }}
          >
            <motion.div className='div-btn-close'>
              <motion.button type="button" className="btn-close" data-bs-dismiss="card" aria-label="Close" onClick={handleCloseCard} />
            </motion.div>
            <motion.img src={activeCard.img} className="card-img-top" alt="imagen app" />
            <motion.div className="card-body">
              <motion.h5 className="card-title">{activeCard.title}</motion.h5>
              <motion.div>
                <motion.p className="card-text">{activeCard.text}</motion.p>
                <motion.div className="div-btn-info">
                  <motion.a href={activeCard.linkDeploy} target="_blank" className="btn btn-info">
                    Visitar
                  </motion.a>
                  <motion.a href={activeCard.linkCode} target="_blank" className="btn btn-info">
                    Código
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <motion.div className="container d-flex">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="card h-100 p-0 m-3"
            style={ activeCard ? { width: '15rem', opacity: 0.8 } : {width: '18rem'} }
            whileHover={{ scale: 1.1 }}
            transition={{
              layout: {
                duration: 1,
                type: 'spring',
              },
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
    </AnimatePresence>
  );
};

export default Cards;
