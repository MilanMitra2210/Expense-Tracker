import './App.css';
import Home from './pages/home';
import Header from './components/header/index';
import { Route, BrowserRouter as Router ,Routes } from 'react-router-dom';
import AddExpense from './pages/add-expense/add-expense';
import Footer from './components/footer';


function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/add-expense'  Component={AddExpense} />
        </Routes>
        <Footer/>
    </Router>

      );
}

export default App;
