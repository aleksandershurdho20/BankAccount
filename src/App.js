import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Deposit from './Components/Deposit'


function App() {
  return (
    <div className="App">
      <Header/>
      <Deposit/>
    </div>
  );
}

export default App;


;