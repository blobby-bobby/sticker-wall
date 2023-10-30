import './styles.scss'
import ReactCurvedText from "react-curved-text";
import stickGuy from "@/assets/stickerwall-guy.png"
import stickerWallText from "@/assets/stickerwall-txt.png"
import Sticker from "./Sticker";
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StickersState, addStickerToWall } from '@/reducers/stickers';

const Wall: FunctionComponent = () => {

  // FONCTIONNALITE CLIC = STICKER
  const dispatch = useDispatch()
  const stickers = useSelector((state: { stickers: StickersState }) => state.stickers.value);

  // La fonction pour ajouter un sticker sur le mur
  const handleAddSticker = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    dispatch(addStickerToWall({xPosition: clientX - 100, yPosition: clientY -100}));
  }

  return (
    <>
    <div className="wall" id="snapit" onClick={handleAddSticker}>
      {/* WHERE THE STICKER WALL HAPPENS, I GUESS, WHERE THE ACTION OF CLICKING ADDS A STICKER */}

      {stickers.map((data: any, i: number) => ( <Sticker key={i} {...data} />))}

      {/* DECORATIONS & INSTRUCTIONS FOR THE WALL */}
        <div className='wall__graphic'>
          {/* Curved text */}
          <div className='wall__graphic--curvedtext'>
            <ReactCurvedText width={500} height={100} cx={250} cy={100} rx={200} ry={65} startOffset={40} reversed={true} text='Bienvenue sur le'  textPathProps={{"fill": "#FFFFFF"}} />
          </div>
          
          {/* IMG logo & smiley */}
          <img src={stickerWallText} alt="sticker-wall-text" className='wall__graphic--logo'/>
          <img src={stickGuy} alt="sticker-wall-guy"  className='wall__graphic--guy'/>

        </div>
    </div>

    <div className="instructions">
      <span className='instructions--hand'>☝️</span>
      <p>Clique où ça te chante pour coller un sticker sur le mur</p>
      <span className='instructions--hand'>☝️</span>
    </div>
    </>
  )
}

export default Wall