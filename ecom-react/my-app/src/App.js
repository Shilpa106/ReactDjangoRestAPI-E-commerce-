import logo from "./logo.svg";
import "./App.css";
import {Container} from 'react-bootstrap'

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  return (
    <div>
      <Header/>
      <main>
      <Container>
        <HomeScreen />
      </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
