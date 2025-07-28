import "./App.scss";
import { Slider } from "./components/Slider";
// import dotDark from '../src/image/dots/dot-dark.svg';
// import dotLight from '../src/image/dots/dot-light.svg';

function App() {
  return (
    <div className="wrapper">
      <div className='block'>
        <div className='container'>
          <div className='container__title'>
            <h1 className='container__text'>
              Voices of Success with Sales Fortuna
            </h1>
          </div>
          <div className='container__slider'>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
