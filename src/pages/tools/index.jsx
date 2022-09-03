import BoardBox from '../../components/common/BoardBox';
import ListBox from '../../components/ListBox';
import { TOOL_LIST } from '../../lib/paths';

const Tools = () => {
  return (
    <BoardBox>
      <h1 className='text-xl font-medium'>Tools</h1>
      <ListBox list={TOOL_LIST} />
    </BoardBox>
  );
};

export default Tools;
