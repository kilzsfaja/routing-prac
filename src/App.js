import './App.css';
import { Route, Routes } from 'react-router-dom';
import ColoredHello from './components/ColoredHello';
import Number from './components/Number';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/:numId' element={<Number/>}/>
        <Route path='/:textColor/:bgColor/:text' element={<ColoredHello/>}/>
      </Routes>
    </div>
  );
}

export default App;

