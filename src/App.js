import './App.css';
import {Routes, Route} from 'react-router-dom';

import { EmployeeForm, EmployeeList, Navbar } from './components';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
    </div>
  );
}

export default App;
