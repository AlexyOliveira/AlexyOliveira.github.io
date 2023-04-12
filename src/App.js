import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Me from "./pages/Me";
import Description from "./pages/Description";
import Stacks from "./pages/Stacks";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Me />
      <Description />
      <Stacks />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
