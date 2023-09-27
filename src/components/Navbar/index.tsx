import { FunctionComponent, useState } from 'react';
import './styles.scss'
import { FiMenu, FiX, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
import Updates from '@/components/Updates';

const Navbar: FunctionComponent = () => {

  // Menu OPEN - CLOSE switches
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const toggleMenu = () => { setIsToggleOpen((prevToggle) => !prevToggle) }

  // OPEN modal
  const [isUpdatesOpen, setIsUpdatesOpen] = useState<boolean>(false);
  const openUpdates = () => { 
    setIsUpdatesOpen(true); 
    setIsToggleOpen(false);
  }
  const closeUpdates = () => {setIsUpdatesOpen(false)}

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
  const containerVars = {
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
        <motion.nav variants={containerVars} initial="initial" animate="open" exit="initial" className='primary-menu__links'>
          {/* LIEN EXT => REPO GITHUB */}
          <div className='primary-menu__links--item'>
            <motion.div variants={linksVars}>
              <a href="https://github.com/blobby-bobby/sticker-wall" target='_blank'>Code source</a>
            </motion.div>
          </div>

          {/* MODALE * UPDATES Link */}
          <div className='primary-menu__links--item'>
            <motion.div variants={linksVars} onClick={openUpdates}>
              <a href="#">Updates - journal</a>
            </motion.div>
          </div>

        </motion.nav>

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
        <Updates isUpdatesOpen={isUpdatesOpen} onClose={closeUpdates} />

    </>
  )
}

export default Navbar