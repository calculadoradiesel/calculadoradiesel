import { useState } from 'react';
import logo from './assets/logo-wawa.png'; // Asegúrate de tener tu logo
import './index.css';

function App() {
  const [inputs, setInputs] = useState({
    combustibleHabilitado: '',
    residuoTanque: '',
    indiceConsumo: '',
    kmRecorridos: ''
  });
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const calcularCombustible = () => {
    const { combustibleHabilitado, residuoTanque, indiceConsumo, kmRecorridos } = inputs;
    const total = parseFloat(combustibleHabilitado) + parseFloat(residuoTanque);
    const consumido = parseFloat(kmRecorridos) / parseFloat(indiceConsumo);
    setResultado((total - consumido).toFixed(2));
  };

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Logo Flota Guaguas" className="logo" />
      </div>
      
      <h1>Calculadora de Combustible</h1>
      
      <div className="input-group">
        <label>Combustible Habilitado (Lts)</label>
        <input
          type="number"
          name="combustibleHabilitado"
          value={inputs.combustibleHabilitado}
          onChange={handleChange}
          placeholder="Ej: 120"
        />
      </div>

      <div className="input-group">
        <label>Residuo en Tanque (Lts)</label>
        <input
          type="number"
          name="residuoTanque"
          value={inputs.residuoTanque}
          onChange={handleChange}
          placeholder="Ej: 15"
        />
      </div>

      <div className="input-group">
        <label>Índice de Consumo (Km/Lt)</label>
        <input
          type="number"
          name="indiceConsumo"
          value={inputs.indiceConsumo}
          onChange={handleChange}
          placeholder="Ej: 8.5"
          step="0.1"
        />
      </div>

      <div className="input-group">
        <label>Kilómetros Recorridos (Km)</label>
        <input
          type="number"
          name="kmRecorridos"
          value={inputs.kmRecorridos}
          onChange={handleChange}
          placeholder="Ej: 350"
        />
      </div>

      <button onClick={calcularCombustible}>Calcular Combustible</button>

      {resultado !== null && (
        <div className="resultado">
          <h2>Combustible Restante</h2>
          <p>{resultado} Litros</p>
        </div>
      )}
    </div>
  );
}

export default App;