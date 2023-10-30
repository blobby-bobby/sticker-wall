import { FunctionComponent } from "react"
import './styles.scss'
import { FiTrash2, FiCamera, FiCameraOff, FiMeh, FiSmile } from 'react-icons/fi'
import * as htmlToImage from 'html-to-image';
import useModal from '@/hooks/useModal';
import Modal from '../Modal';
import DeleteTabContent from "../TabContent/DeleteTabContent";
import SnapshotTabContent from "../TabContent/SnapshotTabContent";
import { takeScreenshot } from "@/reducers/screenshots";
import { useDispatch, useSelector } from "react-redux";
import { StickersState } from '@/reducers/stickers';
import { motion } from "framer-motion";

const FeatPanel: FunctionComponent = () => {

  // OPEN modal
  const { isOpen, openModal, closeModal, modalOptions } = useModal();

  // Redux snapshot options
  const dispatch = useDispatch()
  const stickers = useSelector((state: { stickers: StickersState }) => state.stickers.value);

  // Capture écran
  const handleSnapshot = () => {
    setTimeout(() => {
      if (stickers.length >= 1) {
        const element = document.getElementById('snapit');
      if (element) {
        htmlToImage.toJpeg(element, { quality: 0.95 })
          .then(function (dataUrl: string) {
            dispatch(takeScreenshot(dataUrl))
          });
      } else {
        // Si le mur n'est pas trouvé
        console.error("Capture impossible : l'élément avec l'ID 'snapit' n'a pas été trouvé.");
      }
      
      // OPEN SCREENSHOT MODAL
      openModal({ 
        title: "Say Cheese!!!",
        icon: <FiSmile size="42px" />, 
        color: "#FFEE57",
        contentComponent: <SnapshotTabContent onClose={closeModal} />
        })
      }
    }, 0.1);
  }

  // ANIM DELETE BUTTON
    const deleteVars = {
      initial: {
        scale: '0%',
      },
      animate: {
        scale: '100%',
        transition: {
          duration: 0.1,
          ease: [0.12, 0.42, 0.79, 0],
        }
      },
      exit: {
        scale: '0%',
        transition: {
          delay: 0.3,
          duration: 0.3,
          ease: [0.12, 0, 0.39, 1]
        }
      }
    }

  return (
    <>
    <div className="features-panel">

        {/* SNAPSHOT BUTTON */}
        <button className="feat-button" 
        // onClick={() => snapshot()}
        onClick={() => handleSnapshot()} >
            {stickers.length >= 1 ? <FiCamera size={24} /> : <FiCameraOff size={24} /> }
        </button>

        {/* RESET BUTTON */}
        {stickers.length >= 1 &&
            <motion.button className="feat-button" variants={deleteVars} initial='initial' animate='animate' exit='exit'
            onClick={() => openModal({ 
              title: "Hold it!!!", 
              icon: <FiMeh size={42} />, 
              color: "#FF7557",
              contentComponent: <DeleteTabContent onClose={closeModal} />
              })}>
                <FiTrash2 size={24} />
                
            </motion.button>
        }
    </div>

    {/* MODAL ALERT */}
      {modalOptions && (
        <Modal isOpen={isOpen} onClose={closeModal} {...modalOptions}>
          {modalOptions.contentComponent}
        </Modal>
      )}
    </>
  )
}

export default FeatPanel