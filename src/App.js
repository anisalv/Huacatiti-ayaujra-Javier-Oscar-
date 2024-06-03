import "./styles.css";
import { ReactComponent as Clima } from "./clima.svg";
//import clima from "./clima.svg";
//import "./App.";
import { Header } from "./Componentes/Header";
import { Conversor } from "./Componentes/Conversor";
import { Footer } from "./Componentes/Footer";
import { Section } from "./Componentes/Section";
import { Section1 } from "./Componentes/Section1";
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Conversor />
      {/*<img src={clima} className="App-clima" alt="Clima"/>*/}
      <Clima className="App-clima" />
      <Section1 />
      <Footer />
    </div>
  );
}
export default App;
