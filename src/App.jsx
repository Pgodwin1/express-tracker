
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Auth} from './pages/auth/index'
import { ExpenseTracker } from './pages/auth/expenses-tracker';

function App() {

  return (
    <Router>
      <Routes>
         <Route path='/' element={<Auth />} />
         <Route path='expense-tracker' element={<ExpenseTracker />} />
      </Routes>
    </Router>
  )
}

export default App
