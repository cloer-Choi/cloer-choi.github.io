import BoardBox from '../components/common/BoardBox';
import ListBox from '../components/ListBox';
import { TOOL_LIST } from '../lib/paths';

const Home = () => {
  return (
    <main className='h-full flex justify-center items-center'>
      <BoardBox>
        <section>
          <h1 className='text-xl font-medium'>Tools</h1>
          <ListBox list={TOOL_LIST} />
        </section>
      </BoardBox>
    </main>
  );
};

export default Home;
