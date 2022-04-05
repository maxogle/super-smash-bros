
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
        <Fighter name={'sheik'} color={'lightskyblue'} img={''} />
      </div>
      <div className='fighter-screen'>
        <h2>Roy</h2>
        <img src={'https://www.smashbros.com/assets_v2/img/fighter/roy/main.png'} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sint magni. Consequuntur neque repellat maxime asperiores, iusto reiciendis voluptate nobis fugiat tempora facere labore doloremque dolor ratione a facilis quia.</p>
      </div>
    </div>
  );
}

export default App;
