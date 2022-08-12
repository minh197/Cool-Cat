import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ViewCats from "./pages/ViewCat";
import { Routes, Route} from 'react-router-dom';

import CreateMeme from "./pages/CreateMeme";

function App() {
  
  return (
    <div>
      <NavBar/> 
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/viewcats' element={<ViewCats/>}/>
        <Route path='/creatememes' element={<CreateMeme/>}/>
      </Routes>
    </div>
  );
}
export default App;