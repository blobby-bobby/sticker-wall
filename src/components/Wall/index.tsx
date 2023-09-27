import './styles.scss'
import ReactCurvedText from "react-curved-text";
import stickGuy from "@/assets/stickerwall-guy.svg"
import stickerWallText from "@/assets/stickerwall-txt.svg"
import { StickerType } from '@/shared/types';
import Sticker from "./Sticker";
import { stickersImg } from '@/shared/types';
import { useState } from 'react';

type Props = {}

const Wall = (props: Props) => {

  // Add sticker on wall
  const [stickers, setStickers] = useState<StickerType[]>([])
  const [count, setCount] = useState<number>(0)

  const addSticker = (e: any) => {

      const newSticker: StickerType = {
        image: stickersImg[count].path,
        name: stickersImg[count].name,
        rotation: Math.floor(Math.random() * 40),
        xPosition: e.clientX - 100,
        yPosition: e.clientY - 100,
      };
      setStickers([...stickers, newSticker]);
      
      setCount((prevCount) => prevCount + 1)

      if (count === stickersImg.length - 1) {
        setCount(0)
      }
  }

  return (
    <div className="wall" onClick={addSticker}>
      {/* WHERE THE STICKER WALL HAPPENS, I GUESS, WHERE THE ACTION OF CLICKING ADDS A STICKER */}

      {stickers.map((data, i) => (
        <Sticker key={i} {...data} />
      ))}

      {/* DECORATIONS & INSTRUCTIONS FOR THE WALL */}
        <div className='wall__graphic'>
          {/* Curved text */}
          <ReactCurvedText width={500} height={100} cx={250} cy={100} rx={200} ry={65} startOffset={40} reversed={true} text='Bienvenue sur le' textProps={{"style": {"fontSize": "40"}}} textPathProps={{"fill": "#FFFFFF"}} />
          
          {/* IMG logo & smiley */}
          <img src={stickerWallText} alt="sticker-wall-text" className='wall__graphic--logo'/>
          <img src={stickGuy} alt="sticker-wall-guy"  className='wall__graphic--guy'/>

        </div>

        <div className="wall__instructions">
          <span className='wall__instructions--hand'>☝️</span>
          <p>Clique où ça te chante pour coller un sticker sur le mur</p>
          <span className='wall__instructions--hand'>☝️</span>
        </div>
    </div>
  )
}

export default Wall