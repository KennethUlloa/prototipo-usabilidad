import logo from './logo.svg';
import './App.css';
import './main.scss';
import Banner from './banner/banner';
import Portada from './portada/portada';
import {getPeliculas} from './api'

function App() {
  return (
    <div className="App">
      <Banner/>
      <div className='d-flex'>
        {getPeliculas().map(item => <Portada props={item}/>)}
      </div>
    </div>
  );
}

export default App;
