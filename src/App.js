
import './App.css';
import Fighter from './components/Fighter';

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter name={'Roy'} color={'red'} img={''}/>
        <Fighter name={'fox'} color={'green'} img={''}/>
        <Fighter name={'Ganondorf'} color={'purple'} img={''} />
      </div>
    </div>
  );
}

export default App;
