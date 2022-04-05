
import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen'

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter name={'Roy'} color={'red'} img={''}/>
        <Fighter name={'fox'} color={'green'} img={''}/>
        <Fighter name={'Ganondorf'} color={'purple'} img={''} />
        <Fighter name={'sheik'} color={'lightskyblue'} img={''} />
      </div>
      <FighterScreen/>     
    </div>
  );
}

export default App;
