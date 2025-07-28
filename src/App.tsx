import "./App.scss";
import { Slider } from "./components/Slider";

function App() {
  return (
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
  );
}

export default App;
