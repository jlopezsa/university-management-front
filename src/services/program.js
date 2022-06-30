const API_URL = 'http://localhost:8080';

export async function registerProgram(program) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(program),
  };
  try {
    const response = await fetch(`${API_URL}/api/program`, payload);
    const data = await response.json();
    return (data);
  } catch (error) {
    throw new Error(error);
  }
}
