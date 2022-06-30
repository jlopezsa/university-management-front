import './App.css';
import ManageProgram from './components/ManageProgram';
import ManageStudent from './components/ManageStudent';

function App() {
  return (
    <div>
      <h1>PRUEBA TÉCNICA FRONT-BACK</h1>
      <ManageStudent />
      <hr />
      <ManageProgram />
    </div>
  );
}

export default App;
