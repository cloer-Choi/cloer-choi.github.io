import { Link } from 'react-router-dom';

// list = {text:string, url:string}[]
const ListBox = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Link key={item.text} to={item.url} className='hover:underline'>
          {item.text}
        </Link>
      ))}
    </ul>
  );
};

export default ListBox;
