import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Deposit from './Components/Deposit'
import Footer from './Components/Footer'
import Routes from './Components/Routes'
function App() {
  return (
    <div >
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;


;