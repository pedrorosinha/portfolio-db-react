import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecalho from './Componentes/Cabecalho';
import EstiloGlobal from './Componentes/EstiloGlobal';
import Titulo from './Componentes/Titulo';
import ListSkills from './Componentes/Skills';
import Projetos from './Componentes/Projetos';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<>
            <Titulo />
            <ListSkills />
          </>} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;