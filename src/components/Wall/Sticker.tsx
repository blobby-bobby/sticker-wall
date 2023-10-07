import { StickerType } from "@/shared/types";
import { FunctionComponent } from "react";

const Sticker: FunctionComponent<StickerType> = (props) => {

    const stickerStyles:React.CSSProperties = {
        position: "absolute",
        transform: `rotate(${props.isNegative === 1 ? "" : "-"}${props.rotation}deg)`,
        top: `${props.yPosition}px`,
        left: `${props.xPosition}px`,
        zIndex: 2, 
        pointerEvents: 'none',
    };

    const getImageUrl = (name: string) => {
      return new URL(`/src/assets/${name}`, import.meta.url).href
    }

    

  return (
    <img src={getImageUrl(props.image.path)} alt={props.image.name} style={stickerStyles} />
  )
}

export default Sticker