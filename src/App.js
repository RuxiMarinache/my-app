import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TabelArticole from './components/Articole';
import FormularArticol from "./components/FormularArticol";
import TabelReferences from './components/References';
import FormularReference from "./components/FormularReference";


function App() {
  return (
    <div className="App">
      <div>Examen TW</div>
      <Router>
        <Routes>
          <Route path="/" element={<TabelArticole />} />
          <Route path="/formular-articol" element={<FormularArticol />} />
          <Route path="/references" element={<TabelReferences />} />
          <Route path="/formular-reference" element={<FormularReference />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
