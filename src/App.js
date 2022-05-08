import './App.css';
import image from './1.jpg';
import imageTwo from './2.jpg';
import { List } from './List';

function App() {
  return (
    <div className="App">
     
      <div className='App-box'>
         <img src={image} alt="a girl" width="200px" className='firstImage' /> 
      </div>

     
      <div className='App-box'>
        <h1>THINGS TO DO</h1>
      </div>
      
      <div className='App-box'>
        <List/>
      </div>
      
      <div className='App-box'>
        <img src={imageTwo} alt="a boy" width="200px" className='firstImage' />
      </div>
      
    </div>
  );
}

export default App;
