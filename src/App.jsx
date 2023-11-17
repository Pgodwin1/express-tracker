import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpensesTracker } from "./pages/auth/expenses-tracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="expense-tracker" element={<ExpensesTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
