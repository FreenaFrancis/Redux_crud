import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './component/Create'
import Edit from './component/Edit';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
