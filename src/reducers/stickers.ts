import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StickerType, stickersImg } from '@/shared/types';

export interface StickersState {
  value: StickerType[];
  count: number;
}

const initialState: StickersState = {
  value: [],
  count: 0, // Mon compteur
};

export const stickersSlice = createSlice({
  name: 'stickers',
  initialState,
  reducers: {
    addStickerToWall: (state, action: PayloadAction<{ xPosition: number; yPosition: number }>) => {
      let newSticker: StickerType = {
        image: stickersImg[state.count],
        rotation: Math.floor(Math.random() * 52),
        xPosition: action.payload.xPosition,
        yPosition: action.payload.yPosition,
        isNegative: Math.floor(Math.random() * 2),
      };

      // Incrémentation de state.count et réinitialisation pour relancer la boucle des stickers
      state.count++;
      if (state.count === stickersImg.length) {
        state.count = 0;
      }

      state.value.push(newSticker);
    },

    resetStickers: (state) => {
      state.value = [];
    },
  },
});

// Pas le même actions que dans l'init du reducer (un "s" en plus)
export const { addStickerToWall, resetStickers } = stickersSlice.actions;
export default stickersSlice.reducer;