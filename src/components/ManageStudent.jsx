import { useState } from 'react';
import { Input, Button } from './AtomicComponents';
function ManageStudent() {

  const [ student, setStudent ] = useState({});

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateStudent = (e) => {
    e.preventDefault();
    console.log('Datos del estudiante: ', student);
  }

  return (
    <div>
      <h2>Administración de datos del esudiante</h2>
      <h4>Ingrese los siguientes datos del estudiante</h4>
      <form action="">
        <Input onChange={handleChange} type="text" name="userId" placeholder="Id" />
        <Input onChange={handleChange} type="number" name="userCedula" placeholder="Cedula" />
        <Input onChange={handleChange} type="text" name="userName" placeholder="Nombre" />
        <Input onChange={handleChange} type="email" name="userEmail" placeholder="Email" />
        <Input onChange={handleChange} type="tel" name="userPhone" placeholder="Telefono" />
        <Button onClick={handleCreateStudent}>Registrar estudiante</Button>
      </form>
    </div>
  )
}

export default ManageStudent
