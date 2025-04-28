import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const t9Mapping = {
    1: [',', '.'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: [' '],
  };

  const [currentText, setCurrentText] = useState(''); // Texto final
  const [currentLetter, setCurrentLetter] = useState(null); // Letra actual
  const [currentKey, setCurrentKey] = useState(null); // Tecla actual
  const [pressCount, setPressCount] = useState(0); // Número de veces que presiona la tecla
  const [lastPressTime, setLastPressTime] = useState(0); // Último tiempo de presión
  const [timeOutId, setTimeOutId] = useState(null)
  const TIME_LIMIT = 3000; // Límite de tiempo de 2 segundos

  // Añadir la letra actual al texto y reiniciar la tecla
  const addCurrentLetter = () => {
    if (currentKey !== null) {
      const letters = t9Mapping[currentKey];
      const finalLetter = letters[pressCount];

      setCurrentText((prevText) => prevText + finalLetter); // Fijar la letra seleccionada
      setCurrentLetter(null); // Limpiar la letra mostrada
      setCurrentKey(null); // Reiniciar la tecla actual
      setPressCount(0); // Reiniciar el contador
    }
  };

  const handleKeyPress = (key) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastPressTime;

    // Si la tecla es la misma y el tiempo es menor al límite, seguimos cambiando la letra
    if (key === currentKey && timeDifference < TIME_LIMIT) {
      const letters = t9Mapping[key];
      const nextPressCount = (pressCount + 1) % letters.length;
      setPressCount(nextPressCount);
    } else {
      // Si la tecla es diferente o ha pasado más del tiempo límite, guardamos la letra actual
      if (currentKey !== null) {
        addCurrentLetter();
      }
      setCurrentKey(key);
      setPressCount(0);
    }

    setLastPressTime(currentTime);
  };

  // useEffect que se dispara cada vez que cambia la tecla o el número de presiones
  useEffect(() => {
    if (currentKey !== null) {
      const letters = t9Mapping[currentKey];
      const finalLetter = letters[pressCount];
      setCurrentLetter(finalLetter);
    }
  }, [pressCount, currentKey]);

  // maneja el timpo limite de los 3 segundos apra fijar la letra 
  useEffect(() => {

    if (currentKey !== null) {
      if (timeOutId) {
        clearTimeout(timeOutId) // Limpiar el temporizador anteiror
        const newTimeOutId = setTimeout(() => {
          addCurrentLetter(); // Fijar la letra seleccionada 
          
        }, TIME_LIMIT);

        setTimeOutId(newTimeOutId)
      }

      // una limpieza cde time out cunado el componente cambie

      return () =>{
        if (timeOutId) {
          clearTimeout(timeOutId)          
        }
      }
      
    }

  }, [currentKey, lastPressTime])
  
  // manejo de boton de borrado de ultima letra
  const handleDelete =() => {

    if (currentLetter !='') {
      setCurrentLetter('')            
    }else{
      setCurrentText((prevText) => prevText.slice(0,-1)) // Eliminamos el último caracter
    }
  }

  return (
    <div className="app">
      <div className="screen">
        <p>{currentText}{currentLetter}</p> {/* Pantalla */}
      </div>
      <div className="teclado">
        {/* Mostrar teclado con opciones */}
        {Object.keys(t9Mapping).map((key) => (
          <button key={key} onClick={() => handleKeyPress(parseInt(key, 10))}>
            <div className="key-label">
              <span>{key}</span>
              <span className="letters">{t9Mapping[key].join('')}</span>
            </div>
          </button>
        ))}

        <button onClick={handleDelete}>
          <div className='key-label'>
            <span>C</span>
            <span className='letters'>Borrar</span>
          </div>
        </button>
      </div>

    </div>
  );
}

export default App;
