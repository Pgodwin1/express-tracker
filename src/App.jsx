
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Auth} from './pages/auth/index'

function App() {

  return (
    <Router>
      <Routes>
         <Route path='/' element={<Auth />} />
         <Route path='express-tracker' element={} />
      </Routes>
    </Router>
  )
}

export default App
