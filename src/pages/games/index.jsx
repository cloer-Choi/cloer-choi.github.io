import BoardBox from '../../components/common/BoardBox';
import ListBox from '../../components/ListBox';
import { GAME_LIST } from '../../lib/paths';

const Games = () => {
  return (
    <BoardBox>
      <h1 className='text-xl font-medium'>Games</h1>
      <ListBox list={GAME_LIST} />
    </BoardBox>
  );
};

export default Games;
