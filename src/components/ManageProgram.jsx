import { useState } from 'react';
import { Input, Button } from './AtomicComponents';

function ManageProgram() {

  const [ program, setProgram ] = useState({});

  const handleChange = (e) => {
    setProgram({
      ...program,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateProgram = (e) => {
    e.preventDefault();
    console.log('Datos del programa: ', program);
  }

  return (
    <div>
      <h2>Administración de datos del programa</h2>
      <h4>Ingrese los siguientes datos del programa</h4>
      <form action="">
        <Input onChange={handleChange} type="text" name="programId" placeholder="Id" />
        <Input onChange={handleChange} type="text" name="programName" placeholder="Nombre" />
        <Input onChange={handleChange} type="text" name="programDescription" placeholder="Descripción" />
        <Button onClick={handleCreateProgram}>Registrar programa</Button>
      </form>
    </div>
  )
}

export default ManageProgram;
