import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Barra';
import ItemListContainer from './components/ItemListContainer';
import imagenes from './assets/imagenes';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Barra className="Barra" />
        <ItemListContainer className="" />
      </header>
      <main className="App-main">
        
      </main>
      {/* <img src={imagenes[0].img} /> */}
    </div>
  );
}

export default App;
