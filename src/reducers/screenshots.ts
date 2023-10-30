import { createSlice } from '@reduxjs/toolkit';  

interface ScreenshotsState {
	imgPath: string | null,
	id: number,
}

const initialState: ScreenshotsState = {
	imgPath: null,
	id: 0,
};

export const screenshotsSlice = createSlice({  
	
	name: 'screenshots',
	initialState,  
	    reducers: {  
	        takeScreenshot: (state, action) => {  
		        state.imgPath = action.payload; 
	        }, 
			downloadScreenshot: (state) => {
				state.id += 1;
			}
	},  
});  

export const { takeScreenshot, downloadScreenshot } = screenshotsSlice.actions;
export default screenshotsSlice.reducer;