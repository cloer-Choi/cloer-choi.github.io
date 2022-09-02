import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CenterLayout from './components/layouts/CenterLayout';
import { Bet } from './pages';

function App() {
  return (
    <BrowserRouter basename='/playground'>
      <Routes>
        <Route path='/' element={<CenterLayout />}>
          <Route index element={<Bet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
