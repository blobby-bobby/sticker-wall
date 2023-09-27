import { UpdatesType } from '@/shared/types';
import './styles.scss'
import updateImg from '@/assets/cheese.png';
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent } from 'react';

type UpdatesProps = {
    onClose: () => void;
    isUpdatesOpen: boolean;
}

// Updates data
const updates: Array<UpdatesType> = [
    {
      day: "27/09/2023",
	    image: updateImg,
      title: "Lancement du Sticker Wall",
	    description: 'Et voilà, le Sticker Wall est en ligne. Pour cette première version, la fonctionnalité "1 clic, 1 sticker sur le mur" est fontionnelle, et les bases ont été posées pour faire évoluer ce Sticker Wall =).',
	    next: ["plus de stickers", "pourquoi pas ajouter un panneau qui permettra de choisir le sticker à coller sur le mur", "personnaliser le curseur"],
    },
]

// Modal animations
const updateVars = {
    initial: {
      y: '110%',
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      }
    },
    exit: {
      y: '100%',
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0]
      }
    }
  }

const Updates: FunctionComponent<UpdatesProps> = (props) => {

  return (
    <AnimatePresence>
      { props.isUpdatesOpen && (
        <motion.div className="modal" variants={updateVars} initial="initial" animate="animate" exit="exit">

          {/* CLOSE BUTTON */}
            <button className='modal__close' onClick={props.onClose}>
                <span>fermer</span> 
                <FiX size={32} />
            </button>
        
            <h2>Mises à jour & améliorations du Sticker Wall</h2>
            <div className='modal__container'>
              {/* UPDATES ROW */}
            {updates.map((update, i) => (
                <div className='update' key={i}>
                    <hr />
                    <div className='update__content'>
                        {/* ILLU LEFT */}
                        <img src={update.image} alt={`update ${i}`} />
        
                        {/* CONTENT RIGHT */}
                        <div className='update__content--text'>
                            <h3>☺️ {update.day} : : {update.title}</h3>
        
                            <p className='description'>{update.description}</p>
        
                            <span>↝ Améliorations prévues pour la suite ::</span>

                            <ul>
                            {update.next.map((list, i) => (
                              <li key={i}>{list}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </motion.div>

      )}
    </AnimatePresence>
  )
}

export default Updates