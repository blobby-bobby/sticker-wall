import { FunctionComponent, useState } from 'react';
import './styles.scss'
import { FiMenu, FiX, FiLinkedin, FiInstagram, FiGithub, FiFile, FiFacebook, FiTwitter } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
import Updates from '@/components/Updates';
import { updatesData } from '@/shared/types';
import useModal from '@/hooks/useModal';
import Modal from '../Modal';
import shareGraphic from "@/assets/soyez-sympas-partagez.gif"

const Navbar: FunctionComponent = () => {

  // Menu OPEN - CLOSE switches
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const toggleMenu = () => { setIsToggleOpen((prevToggle) => !prevToggle) }

  // OPEN modal
  const { isOpen, modalOptions, openModal, closeModal } = useModal();

  // Open updates
  const openUpdates = () => {
    openModal({
      icon: <FiFile size={42} />,
      title: "Updates",
      color: "#B0BDC5",
    });
    toggleMenu();
  }

  
  // Menu animations
  const menuVars = {
    initial: {
      x: '100%',
      opacity: 1
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: {
      x: '100%',
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: [0.12, 0, 0.39, 1]
      }
    }
  }

  // Links animations
  const linksVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1]
      }
    }
  }

  // Stagger animation links
  const linksContainerVars = {
    initial: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      }
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
        staggerDirection: 1,
      }
    }
  }
  
  // Links animations
  const shareVars = {
    initial: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.25,
        ease: [0, 0.55, 0.45, 1]
      }
    }
  }

  return (
    <>
    <div className='nav-opening'>
      {/* OPEN MENU ICON */}
      <div className='toggler' onClick={toggleMenu}>
        <FiMenu size={24} />
      </div>

      {/* MENU OPENED */}
      <AnimatePresence>
      {isToggleOpen ? 
      <motion.div className='primary-menu' variants={menuVars} initial='initial' animate='animate' exit='exit'>

        {/* Closing button */}
        <button className='primary-menu__close' onClick={toggleMenu}>
            <FiX size={36} />
        </button>

        {/* Projects Links */}
        <motion.nav variants={linksContainerVars} initial="initial" animate="open" exit="initial" className='primary-menu__links'>
          {/* LIEN EXT => REPO GITHUB */}
          <div className='primary-menu__links--item'>
            <motion.div variants={linksVars}>
              <a aria-label='code-source' href="https://github.com/blobby-bobby/sticker-wall" target='_blank'>Code source</a>
            </motion.div>
          </div>

          {/* MODALE * UPDATES Link */}
          <div className='primary-menu__links--item'>
            <motion.div variants={linksVars} onClick={openUpdates}>
              <a aria-label='updates'>Updates - journal</a>
            </motion.div>
          </div>

        </motion.nav>

        {/* Section SOYEZ SYMPAS, PARTAGEZ */}
          <motion.div className="primary-menu__share" variants={shareVars} initial="initial" animate="open">
            <img src={shareGraphic} alt="Soyez sympas, partagez !" />
            <div>
              {/* ON FACEBOOK */}
              <a className="primary-menu__share--link" 
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A//sticker-wall.vercel.app/" 
                target='_blank'> 
                  <FiFacebook size={20} /> 
              </a>

              {/* ON TWITTER */}
              <a className="primary-menu__share--link" 
                  href="https://twitter.com/intent/tweet?url=https://sticker-wall.vercel.app/&hashtags=sticker,click&text=Soyez sympas, partagez!" 
                  target='_blank'> 
                <FiTwitter size={20}/> 
              </a>
              
              {/* ON LINKEDIN */}
              <a className="primary-menu__share--link" 
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//sticker-wall.vercel.app/"  
                target='_blank'> 
                  <FiLinkedin size={20}/>
              </a>
            </div>

          </motion.div>

        {/* BOTTOM of nav */}
        <motion.div className='primary-menu__socials' variants={linksVars} initial="initial" animate="open">
          <p>Codé avec ❤️ par <strong>Bulle Ouvrard</strong> </p>
          <a className="primary-menu__socials--link" href="https://github.com/blobby-bobby" target='_blank'> <FiGithub size={14} /> </a>
          <a className="primary-menu__socials--link" href="https://www.instagram.com/bulle_ouvrard/" target='_blank'> <FiInstagram size={14}/> </a>
          <a className="primary-menu__socials--link" href="https://www.linkedin.com/in/bulle-ouvrard/" target='_blank'> <FiLinkedin size={14}/> </a>
        </motion.div>
        
      </motion.div> 
      : ''
      }
      </AnimatePresence>
    </div>

    {/* MODAL UPDATES */}
        {modalOptions && (
          <Modal isOpen={isOpen} {...modalOptions} onClose={closeModal}>
              {updatesData.map((data, i) => ( <Updates {...data} key={i} /> ))}
          </Modal>
        )}
    </>
  )
}

export default Navbar