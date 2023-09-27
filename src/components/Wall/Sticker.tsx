import { FunctionComponent } from "react";

type StickerProps = {
  image: string,
  name: string,
  rotation: number,
  xPosition: number,
	yPosition: number,
}

const Sticker: FunctionComponent<StickerProps> = (props) => {

    const stickerStyles:React.CSSProperties = {
        position: "absolute",
        transform: `rotate(${props.rotation}deg)`,
        top: `${props.yPosition}px`,
        left: `${props.xPosition}px`,
        zIndex: 2, 
        pointerEvents: 'none',
    };

    const getImageUrl = (name: string) => {
      return new URL(`/src/assets/${name}`, import.meta.url).href
    }

  return (
    <img src={getImageUrl(props.image)} alt={props.name} style={stickerStyles} />
  )
}

export default Sticker