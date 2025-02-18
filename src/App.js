import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
const test=10;
  return (
    <div class="wrapper">
      <Header value={test}/>
      <Footer />
</div>
  );
}

export default App;
