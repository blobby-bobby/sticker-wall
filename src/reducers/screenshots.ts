import { createSlice } from '@reduxjs/toolkit';  

export type ScreenshotsState = {
	value: string;
	count: number;
  }

const initialState: ScreenshotsState = {  
 value: "", // pour recueillir l'URL de l'image générée
 count: 1, // pour indenter les noms de l'image lors du téléchargement
};

export const screenshotsSlice = createSlice({  
	
	name: 'screenshots',
	
	initialState,  
	    reducers: {  
	        takeScreenshot: (state, action) => {  
		        state.value = action.payload; 
	        }, 
			downloadScreenshot: (state) => {
				state.count++;
			}
	},  
});  

// Pas le même actions que dans l'init du reducer (un "s" en plus)
export const { takeScreenshot, downloadScreenshot } = screenshotsSlice.actions;
export default screenshotsSlice.reducer;