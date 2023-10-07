
import './styles.scss'
import { FunctionComponent } from 'react';
import { FiDownload, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { ScreenshotsState, downloadScreenshot } from '@/reducers/screenshots';

type SnapshotTabContentProps = {
    onClose: () => void;
}

// DEBUT COMPOSANT
const SnapshotTabContent: FunctionComponent<SnapshotTabContentProps> = (props) => {

  const snapshot = useSelector((state: { screenshots: ScreenshotsState }) => state.screenshots)
  const dispatch = useDispatch()

  // FONCTION POUR TELECHARGER LE SCREENSHOT
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = `stickerwall-mon-mur-${snapshot.count}.jpeg`;
    dispatch(downloadScreenshot())
    link.href = snapshot.value;
    link.click();
    props.onClose();
  }
    
  return (
    <div className='tab-content'>
      <img src={snapshot.value} alt="Tu es sûr ?" className="framed-img" />
        <div className='tab-content__right'>
            <p>Ton mur est prêt à être téléchargé. Tu vas pouvoir décorer ton ordi ou ton téléphone avec =)</p>

          <div className='tab-content__right--buttons'>
            {/* ACTION BUTTON */}
              <button className='modal-button' onClick={() => handleDownload()} style={{backgroundColor: '#FFEE57'}}>
                <FiDownload size={24} />Télécharger
              </button>

            {/* CANCEL BUTTON */}
              <button className='modal-button' onClick={props.onClose}> 
                <FiX size={24} />Revenir sur le mur
              </button>
          </div>
        </div>
      </div>
  )
}

export default SnapshotTabContent