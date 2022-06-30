const API_URL = 'http://localhost:8080';

export async function getAllStudents() {
  try {
    const response = await fetch(`${API_URL}/api/students`);
    const students = await response.json();
    return students;
  } catch (error) {
    throw new Error(error);
  }
}
