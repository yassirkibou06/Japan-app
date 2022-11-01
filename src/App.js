import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import City from './pages/City';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/city" element={<City />}/>
      </Routes>
    </>
  )
}

export default App;
