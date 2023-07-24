import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      
      <div className="titulo">
      
      <h1><big>Lista de Tareas </big></h1></div>

      <div className="listadetareas-principal">

      <h2>Mis tareas</h2>

<ListaDeTareas />
      
      </div>


      


    </div>
  );
}

export default App;
