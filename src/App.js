import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioContato from './FormularioContato'; // Importe o componente FormularioContato
import RegulamentoCampanha from './RegulamentoCampanha'; // Importe o componente RegulamentoCampanha

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FormularioContato />} /> {/* Rota para o FormularioContato */}
        <Route path="/regulamento" element={<RegulamentoCampanha />} /> {/* Rota para o RegulamentoCampanha */}
      </Routes>
    </Router>
  );
};

export default App;
