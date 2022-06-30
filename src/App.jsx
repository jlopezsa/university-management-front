import './App.css';
import ManageProgram from './components/ManageProgram';
import ManageStudent from './components/ManageStudent';
import QueryStudents from './components/QueryStudents';

function App() {
  return (
    <div>
      <h1>PRUEBA TÉCNICA FRONT-BACK</h1>
      <ManageStudent />
      <hr />
      <ManageProgram />
      <hr />
      <QueryStudents />
    </div>
  );
}

export default App;
