import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
