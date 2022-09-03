import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CenterLayout from './components/layouts/CenterLayout';
import Layout from './components/layouts/Layout';
import { Bet, Games, Home, SnakeGame, Tools } from './pages';

function App() {
  return (
    <BrowserRouter basename='/playground'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='tools' element={<CenterLayout />}>
            <Route index element={<Tools />} />
            <Route path='bet' element={<Bet />} />
          </Route>
          <Route path='games' element={<CenterLayout />}>
            <Route index element={<Games />} />
            <Route path='snake-game' element={<SnakeGame />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
