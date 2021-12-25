import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Topper from "./Component/Topper";

function App() {
  return (
    <>
      <Topper></Topper>
      <Navbar></Navbar>
      <Header></Header>
    </>
  );
}

export default App;
