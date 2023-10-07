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
    isNegative: number,
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
    {name: "à bloc !", path: 'a_bloc.png'},
    {name: "Anananas", path: 'anananana.png'},
    {name: "Hey, I'm Isaac", path: 'isaac.png'},
    {name: "lemon makes you dance", path: 'lemon.png'},
    {name: "Ouéé", path: 'nieyyyy-statue.png'},
    {name: "lumière !!", path: 'lumiere.png'},
]

// Toggle modal
export interface ModalOptions {
    icon: JSX.Element;
    title: string;
    color: string;
    contentComponent?: React.ReactNode;
}

// Updates modal
export interface UpdatesType {
    day: string,
	image: string,
    title: string,
	description: string,
	next: string[],
}

// Updates data
export const updatesData: UpdatesType[] = [
    {
        day: "10/10/2023",
        image: 'isaac.png',
        title: "Nouvelles features",
        description: "Parmi les améliorations intégrées, la possibilité de nettoyer le mur en enlevant tous les stickers. Ainsi que la fonctionnalité SCREENSHOT, pour transformer son mur en fond d'écran. Merci Redux =) ! Et au passage, j'ai profité de l'ajout de modales pour passer un coup de poliche sur les interfaces, et pour concocter un design system plus poussé, avec un UI kit fait maison.",
        next: ["encore plus de stickers", "des stickers animés", "personnaliser le curseur", "plus d'aléatoire dans les stickers"],
    },
    {
      day: "27/09/2023",
	  image: 'cheese.png',
      title: "Lancement du Sticker Wall",
      description: "Et voilà, le Sticker Wall est en ligne. Pour cette première version, la fonctionnalité '1 clic, 1 sticker sur le mur' est là, et les bases ont été posées pour faire évoluer ce Sticker Wall =). Cette version de départ comporte un kit de départ de 8 stickers qui devrait s'étoffer dans le temps.",
      next: ["plus de stickers", "pourquoi pas ajouter un panneau qui permettra de choisir le sticker à coller sur le mur", "personnaliser le curseur"],
    },
]