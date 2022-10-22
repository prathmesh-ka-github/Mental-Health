import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BackGradients from './components/BackGradients';

function App() {
  return (
    <div className='back-light transition-all'>
      <NavBar/>
      <Home/>
      <BackGradients/>
      <div id="test-space" className="h-[2000px]"></div>
    </div>
  )
}

export default App;
