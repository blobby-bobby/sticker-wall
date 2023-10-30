import './styles.scss'
import { FunctionComponent } from 'react';
import { FiDownload, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { downloadScreenshot } from '@/reducers/screenshots';
import { RootState } from '@/store/store';

type SnapshotTabContentProps = {
  onClose: () => void;
}

const SnapshotTabContent: FunctionComponent<SnapshotTabContentProps> = (props) => {

  const screenshot = useSelector((state: RootState) => state.screenshots);
  const dispatch = useDispatch();

  const handleDownload = () => {
    if (screenshot.imgPath) {
      const link = document.createElement('a');
      link.download = `stickerwall-mon-mur-${screenshot.id}.jpeg`;
      link.href = screenshot.imgPath;
      link.click();
    }
    dispatch(downloadScreenshot());
    props.onClose();
  }
    
  return (
    <div className='tab-content'>
      {screenshot.imgPath && (
        <img src={screenshot.imgPath} alt="Tu es sûr ?" className="framed-img" />
      )}
      <div className='tab-content__right'>
        <p>Ton mur est prêt à être téléchargé. Tu vas pouvoir décorer ton ordi ou ton téléphone avec =)</p>

        <div className='tab-content__right--buttons'>
          <button className='modal-button' onClick={handleDownload} style={{ backgroundColor: '#FFEE57' }}>
            <FiDownload size={24} /> Télécharger
          </button>

          <button className='modal-button' onClick={props.onClose}>
            <FiX size={24} /> Revenir sur le mur
          </button>
        </div>
      </div>
    </div>
  )
}

export default SnapshotTabContent;
