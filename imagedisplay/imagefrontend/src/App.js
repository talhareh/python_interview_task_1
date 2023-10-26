import logo from './logo.svg';
import './App.css';

import {HomePage} from './homepage';
import {Navigation} from './navigation';
import {ImageList} from './imagelist';
import {ImageUpload} from './upload';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       
     </h3>

     <Navigation/>

     <Routes>
       <Route path='/' component={HomePage} exact/>
       <Route path='/' component={ImageList} exact/>
       <Route path="/add-image" component={ImageUpload} />
       
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
