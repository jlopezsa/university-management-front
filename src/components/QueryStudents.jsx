import { useState } from 'react'
import { Button, Input } from './AtomicComponents';
import { getUserByName } from '../services/students';

function QueryStudents() {
  const [ searchName, setSerachName ] = useState({});

  const handleChange = (e) => {
    setSerachName({
      ...searchName,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const students = await getUserByName(searchName);
    console.log('Datos de los esudiantes:', students);
  }

  return (
    <div>
      <h2>Consultando los estudiantes</h2>
      <br />
      <form action="">
        <Input onChange={handleChange} type="text" name="userName" placeholder="Ingrese nombre de estudiante para consultar"/>
        <Button onClick={handleClick}>Consultar Estudiantes</Button>
      </form>
    </div>
  )
}

export default QueryStudents;
