import { useState } from 'react'
import { Button, Input } from './AtomicComponents';
import { getUserByName } from '../services/students';

function QueryStudents() {
  const [ searchName, setSearchName ] = useState({});
  const [ userFind, setUserFind ] = useState({
    name: '',
    email: '',
    phone: '',
    cedula: '',
  });

  const handleChange = (e) => {
    setSearchName({
      ...searchName,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const students = await getUserByName(searchName);
    console.log('SERACH: ', students[0]);
    setUserFind({
      ...userFind,
      name: students[0].name,
      email: students[0].email,
      phone: students[0].phone,
      cedula: students[0].cedula,
    });
  }

  return (
    <div>
      <h2>Consultando los estudiantes</h2>
      <br />
      <form action="">
        <Input onChange={handleChange} type="text" name="userName" placeholder="Ingrese nombre de estudiante para consultar"/>
        <Button onClick={handleClick}>Consultar Estudiantes</Button>
      </form>
      {/* <p>{!userFind?<p>Estudiante</p> : userFind.name}</p> */}
      <p>Datos del estudiante consultado:</p>
      <p>Nombre: {userFind.name}</p>
      <p>Email: {userFind.email}</p>
      <p>Cedula: {userFind.cedula}</p>
      <p>Telefono: {userFind.phone}</p>
    </div>
  )
}

export default QueryStudents;
