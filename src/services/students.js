const API_URL = 'http://localhost:8080';

export async function getAllStudents() {
  try {
    const response = await fetch(`${API_URL}/api/students`);
    const students = await response.json();
    return students;
  } catch (error) {
    throw new Error(error);
  }
};

export async function getUserByName(name) {
  const { userName } = name;
  try {
    const response = await fetch (`${API_URL}/api/students/search?name=${userName}`);
    // const response = await fetch (`${API_URL}/api/students/search?name=Julian Jair`);
    const student = await response.json();
    return student;
  } catch (error) {
    throw new Error(error);
  }
}

export async function registerUser(student) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(student),
  };
  try {
    const response = await fetch(`${API_URL}/api/students`, payload);
    const data = await response.json();
    return (data);
  } catch (error) {
    throw new Error(error);
  }
}
