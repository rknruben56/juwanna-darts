import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Games from './pages/Games';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Games />}/>
      </Routes>
    </>
  );
}

export default App;
