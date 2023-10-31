
import './App.css';
import Header from ".///components/Header/"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Popular from "./pages/Popular"
import NowPlaying from './pages/Now_playing';
import TopRated from './pages/TopRated';

function App() {
  return <div className='App'>
    <Header/>
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/now_playin' element={<NowPlaying/>}/>
      <Route path='/top_rated' element={<TopRated/>}/>
    </Routes>
  </div>
  

}

export default App;
