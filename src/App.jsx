import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BackGradients from './components/BackGradients';

function App() {
  return (
    <div className='-z-10 back-light transition-all'>
      <NavBar/>
      <Home/>
      <BackGradients/>
      <div id="test-space" className="h-[5000px]"></div>
    </div>
  )
}

export default App;
