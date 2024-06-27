import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/Mywork/Mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
