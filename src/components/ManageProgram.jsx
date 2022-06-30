import { useState } from 'react';
import { Input, Button } from './AtomicComponents';
import { registerProgram } from '../services/program';

function ManageProgram() {

  const [ program, setProgram ] = useState({});

  const handleChange = (e) => {
    setProgram({
      ...program,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateProgram = async (e) => {
    e.preventDefault();
    const sendProgram = await registerProgram(program);
    console.log('Datos del programa: ', sendProgram);
  }

  return (
    <div>
      <h2>Administración de datos del programa</h2>
      <h4>Ingrese los siguientes datos del programa</h4>
      <form action="">
        <Input onChange={handleChange} type="text" name="name" placeholder="Nombre" />
        <Input onChange={handleChange} type="text" name="description" placeholder="Descripción" />
        <Button onClick={handleCreateProgram}>Registrar programa</Button>
      </form>
    </div>
  )
}

export default ManageProgram;
