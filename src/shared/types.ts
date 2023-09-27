// Array of sampler stickers
type StickerImage = {
    name: string;
    path: string;
}

// Wall & Stickers
export interface StickerType {
	image: StickerImage,
	rotation: number,
	xPosition: number,
	yPosition: number,
}

export const stickersImg: StickerImage[] = [
    {name: "Cheese!!!", path: 'cheese.png'},
    {name: "Dinonosaure!", path: 'dinonosor.png'},
    {name: "Sauce qui peut!", path: 'saucequipeut.png'},
    {name: "Pizza Yolo", path: 'pizzayolo.png'},
    {name: "serpaaaant!", path: 'serpaaaant.png'},
    {name: "Groovy worm", path: 'wormy.png'},
    {name: "Yééé", path: 'yee.png'},
    {name: "Yo", path: 'yo.png'},
]

// Toggle modal
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Updates modal
export interface UpdatesType {
    day: string,
	image: string,
    title: string,
	description: string,
	next: string[],
}