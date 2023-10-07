import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import './styles.scss'
import { FunctionComponent, ReactNode } from "react";
import { FiX } from "react-icons/fi";

type ModalProps = {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    color: string;
    icon: JSX.Element;
    title: string;
}

// Modal animations
const modalVars = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.2,
        ease: easeInOut,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0]
      }
    }
  }

const opacityVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.1,
        ease: [0.37, 0, 0.63, 1],
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0]
      }
    }
  }

const Modal: FunctionComponent<ModalProps> = (props) => {
  return (
    <>
    {props.isOpen && (
        <AnimatePresence>
            <motion.div className="full-modal" onClick={props.onClose}  variants={opacityVars} initial="initial" animate="animate" exit="exit">
                <motion.div onClick={(e) => e.stopPropagation()} className="modal-box" variants={modalVars} initial="initial" animate="animate" exit="exit">
                {/* MODAL HEADER */}
                <div className="modal-box__header" style={{backgroundColor: props.color}}>
                  {props.icon}
                  <div className='modal-box__header--separation to-hide'></div>
                  <h2 className='to-hide'>{props.title}</h2>
                  <div className='modal-box__header--separation'></div>
                  <FiX size={42} onClick={props.onClose} className='modal-box__header--close' />
                </div>

                {/* MODAL CONTENT */}
                <div className='modal-box__content'>
                  {props.children}
                </div>
                  
                  
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )}
    </>
  )
}

export default Modal