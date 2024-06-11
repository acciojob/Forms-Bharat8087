import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import Card from './Card';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li id="form-link">
              <Link to="/">Form Layout</Link>
            </li>
            <li id="form-ref-link">
              <Link to="/form-ref">Form with useRef</Link>
            </li>
            <li id="form-state-link">
              <Link to="/form-state">Form with useState</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Card><Form /></Card>} />
          <Route path="/form-ref" element={<Card><FormRef /></Card>} />
          <Route path="/form-state" element={<Card><FormState /></Card>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
