// Wall & Stickers

export interface StickerType {
	image: string,
    name: string,
	rotation: number,
	xPosition: number,
	yPosition: number,
}

// Array of sampler stickers
type StickerImage = {
    name: string;
    path: string;
}

export const stickersImg: StickerImage[] = [
    {name: "Cheese!!!", path: '/src/assets/stickers/cheese.png'},
    {name: "Dinonosaure!", path: '/src/assets/stickers/dinonosor.png'},
    {name: "Sauce qui peut!", path: '/src/assets/stickers/saucequipeut.png'},
    {name: "Pizza Yolo", path: '/src/assets/stickers/pizzayolo.png'},
    {name: "serpaaaant!", path: '/src/assets/stickers/serpaaaant.png'},
    {name: "Groovy worm", path: '/src/assets/stickers/wormy.png'},
    {name: "Yééé", path: '/src/assets/stickers/yee.png'},
    {name: "Yo", path: '/src/assets/stickers/yo.png'},
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