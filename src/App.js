import './App.css';
import Dark from './components/background/dark/Dark';
import Waves from './components/background/waves/Waves';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
