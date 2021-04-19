import './App.css';
import SobreNos from './Components/SobreNos';
import Contato from './Components/Contato';
import Guia from './Components/Guia';
import Moedas from './Components/Moedas';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
     
function App() {
  return (
    <div className="App">
       
     
     <Moedas />
     <Guia />
     <SobreNos />
     <Contato />
     <Footer />

   

    </div>
  );
}

export default App;
