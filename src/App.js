import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Barra';

import Cuerpo from './components/Cuerpo';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Barra className="Barra" />
      </header>
      <main className="App-main">
        <Cuerpo />
      </main>
    </div>
  );
}


export default App;
