type Props = {
  image: string,
  name: string,
  rotation: number,
  xPosition: number,
	yPosition: number,
}

const Sticker = ({ image, name, rotation, xPosition, yPosition }: Props) => {

    const stickerStyles:React.CSSProperties = {
        position: "absolute",
        transform: `rotate(${rotation}deg)`,
        top: `${yPosition}px`,
        left: `${xPosition}px`,
        zIndex: 2, 
        pointerEvents: 'none',
    };

  return (
    <img src={image} alt={name} style={stickerStyles} />
  )
}

export default Sticker