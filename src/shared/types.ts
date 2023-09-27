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
    {name: "Cheese!!!", path: '/src/assets/static/stickers/cheese.png'},
    {name: "Dinonosaure!", path: '/src/assets/static/stickers/dinonosor.png'},
    {name: "Sauce qui peut!", path: '/src/assets/static/stickers/saucequipeut.png'},
    {name: "Pizza Yolo", path: '/src/assets/static/stickers/pizzayolo.png'},
    {name: "serpaaaant!", path: '/src/assets/static/stickers/serpaaaant.png'},
    {name: "Groovy worm", path: '/src/assets/static/stickers/wormy.png'},
    {name: "Yééé", path: '/src/assets/static/stickers/yee.png'},
    {name: "Yo", path: '/src/assets/static/stickers/yo.png'},
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