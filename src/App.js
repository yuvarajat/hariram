import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling

import CalcPage from './pages/CalcPage';
import BillPage from './pages/BillPage';

function App() {
  const [rows, setRows] = useState([
    {sno: 10, rate: 1.26, particulars: 'Top arm pressure checking', nom: 27.5, qty: 12688, amount: 15986.88},
    {sno: 20, rate: 3.21, particulars: 'Spindle resetting work', nom: 47, qty: 12688, amount: 40728.48},
    {sno: 30, rate: 1.45, particulars: 'Bottom apron replacement', nom: 6, qty: 2736, amount: 3967.20},
    {sno: 40, rate: 5.50, particulars: 'Draw bar roller bearing replacement', nom: 10, qty: 664, amount: 3652.00},
    {sno: 50, rate: 776.25, particulars: 'Machine Erection / Shifting Work / Manpower', nom: 14, qty: 14, amount: 10867.50},
]);
  return (
    <Router>
      <div>
        <CalcPage/>
        <Routes>
          <Route path="/bill" element={<BillPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;