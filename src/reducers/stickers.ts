import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StickerType, stickersImg } from '@/shared/types';

export interface StickersState {
  value: StickerType[];
  count: number;
}

const initialState: StickersState = {
  value: [],
  count: 0,
};

export const stickersSlice = createSlice({
  name: 'stickers',
  initialState,
  reducers: {
    addStickerToWall: (state, action: PayloadAction<{ xPosition: number; yPosition: number }>) => {
      const { xPosition, yPosition } = action.payload;
      const image = stickersImg[state.count];
      const rotation = Math.floor(Math.random() * 52);
      const isNegative = Math.floor(Math.random() * 2);

      state.value.push({ image, rotation, xPosition, yPosition, isNegative });

      // Incrémentation de state.count avec une boucle
      state.count = (state.count + 1) % stickersImg.length;
    },

    resetStickers: (state) => {
      state.value = [];
    },
  },
});

export const { addStickerToWall, resetStickers } = stickersSlice.actions;
export default stickersSlice.reducer;