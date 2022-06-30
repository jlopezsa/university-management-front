import { useState } from 'react';
import { Input, Button } from './AtomicComponents';
import { registerUser } from '../services/students';
function ManageStudent() {

  const [ student, setStudent ] = useState({});

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateStudent = async (e) => {
    e.preventDefault();
    const sendStudent = await registerUser(student)
    console.log('Usuario registrado ', sendStudent);
  }

  return (
    <div>
      <h2>Administración de datos del esudiante</h2>
      <h4>Ingrese los siguientes datos del estudiante</h4>
      <form action="">
        <Input onChange={handleChange} type="number" name="cedula" placeholder="Cedula" />
        <Input onChange={handleChange} type="text" name="name" placeholder="Nombre" />
        <Input onChange={handleChange} type="email" name="email" placeholder="Email" />
        <Input onChange={handleChange} type="tel" name="phone" placeholder="Telefono" />
        <Button onClick={handleCreateStudent}>Registrar estudiante</Button>
      </form>
    </div>
  )
}

export default ManageStudent
