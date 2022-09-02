import { Outlet } from 'react-router-dom';

function CenterLayout() {
  return (
    <main className='h-screen flex justify-center items-center'>
      <Outlet />
    </main>
  );
}

export default CenterLayout;
