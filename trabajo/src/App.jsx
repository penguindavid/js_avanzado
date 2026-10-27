import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const materias = ["Inglés", "Matemáticas", "Programación"];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Mis materias favoritas</h2>
      <ul>
        {materias.map((materia, index) => (
          <li key={index}>{materia}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)