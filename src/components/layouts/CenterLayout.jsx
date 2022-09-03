import { Outlet } from 'react-router-dom';

function CenterLayout() {
  return (
    <main className='h-full w-full flex justify-center items-center'>
      <Outlet />
    </main>
  );
}

export default CenterLayout;
