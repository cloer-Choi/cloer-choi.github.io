import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='min-h-[4rem] flex items-center border-b-2'>
      <div className='container mx-auto flex flex-col sm:flex-row items-center sm:justify-between px-40 py-2 gap-2'>
        <div className='text-lg font-medium'>
          <Link to='/'>Playground</Link>
        </div>
        <nav className='flex gap-4 items-center'>
          <Link to='/games' className='nav-button'>
            Games
          </Link>
          <Link to='/tools' className='nav-button'>
            Tools
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
