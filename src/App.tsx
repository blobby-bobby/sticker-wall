import Navbar from "./components/Navbar"
import Wall from "./components/Wall"
import FeatPanel from "./components/FeatPanel"
import stickers from "./reducers/stickers";
import screenshots from "./reducers/screenshots";

// 1 - import Provider et Configure Store
import { Provider } from 'react-redux';  
import { configureStore } from '@reduxjs/toolkit';  

// 2 - définition du reducer
const store = configureStore({  
 reducer: { stickers, screenshots },  
});

function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <Wall />
        <Navbar />
        <FeatPanel />
      </div>
    </Provider>
  )
}

export default App