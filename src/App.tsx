import Navbar from "./components/Navbar"
import Wall from "./components/Wall"
import FeatPanel from "./components/FeatPanel"
import store from "./store/store";
import { Provider } from 'react-redux';  

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