
import './styles.scss'
import { FunctionComponent } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { resetStickers } from "@/reducers/stickers";
import beaker from "@/assets/beaker_panic.gif";

type DeleteTabContentProps = {
    onClose: () => void;
}

const DeleteTabContent: FunctionComponent<DeleteTabContentProps> = (props) => {

  const dispatch = useDispatch()

  const handleDeleteStickers = () => {
    dispatch(resetStickers())
    props.onClose()
  }
    
  return (
    <div className='tab-content'>
      <img src={beaker} alt="Tu es sûr ?" className="framed-img" />
        <div className='tab-content__right'>
          <p>C'est certain ? Le mur va être nettoyé, il va falloir de nouveau cliquer partout sur le mur ... encore =) !</p>

          <div className='tab-content__right--buttons'>
            {/* ACTION BUTTON */}
              <button className='modal-button' onClick={() => handleDeleteStickers()} style={{backgroundColor: '#FF7557'}}>
                <FiCheck size={24} />Oui, certain.e
              </button>

            {/* CANCEL BUTTON */}
              <button className='modal-button' onClick={props.onClose}> 
                <FiX size={24} />Non, attends...
              </button>
          </div>
        </div>
      </div>
  )
}

export default DeleteTabContent