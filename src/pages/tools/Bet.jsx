import { useRef, useReducer } from 'react';
import reducer, { ACTION_TYPE } from '../../lib/tools/bet/reducer';

const Distribution = () => {
  const memberInputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, { members: new Map(), gameCount: 0, amount: 1000 });
  const members = [...state.members.keys()];

  const addMember = (e) => {
    e.preventDefault();
    const newMember = memberInputRef.current.value;
    memberInputRef.current.value = '';
    if (newMember.length > 0) dispatch({ type: ACTION_TYPE.addMember, payload: { newMember } });
  };
  const deleteMember = (e) => {
    const member = e.target.value;
    dispatch({ type: ACTION_TYPE.deleteMember, payload: { member } });
  };
  const addGame = () => dispatch({ type: ACTION_TYPE.addGame });
  const deleteGame = (gameNum) => dispatch({ type: ACTION_TYPE.deleteGame, payload: { gameNum } });

  const updateGameResult = (member, gameNum) => dispatch({ type: ACTION_TYPE.updateGameResult, payload: { member, gameNum } });
  return (
    <div className='min-w-[300px] bg-slate-200 px-4 py-5 md:p-10 rounded-xl flex flex-col shadow-md'>
      <section className='flex justify-center mb-8'>
        <label htmlFor='amount'>Amount: </label>
        <input
          type='number'
          id='amount'
          min={0}
          step={100}
          className='bg-inherit border-b-2 border-slate-300 w-20 text-center'
          value={state.amount}
          onChange={(e) => dispatch({ type: ACTION_TYPE.updateAmount, payload: { amount: parseInt(e.target.value || 0) } })}
        />
      </section>
      <section className='flex flex-col items-center'>
        <table className='bet-table'>
          <thead>
            <tr>
              <th>
                <form onSubmit={addMember} className='flex'>
                  <input type='text' placeholder='Name' className='w-10 md:w-12 bg-inherit text-center placeholder:font-medium md:placeholder:font-semibold' ref={memberInputRef} />
                  <button className='pl-1'>✚</button>
                </form>
              </th>
              {members.map((member) => (
                <th key={member}>
                  <button onClick={deleteMember} value={member}>
                    {`${member} ❌`}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...new Array(state.gameCount)].map((_, gameNum) => (
              <tr key={gameNum}>
                <td>
                  <button onClick={() => deleteGame(gameNum)}>{`- Game ${gameNum + 1}`}</button>
                </td>
                {members.map((member) => (
                  <td key={member} onClick={() => updateGameResult(member, gameNum)}>
                    {state.members.get(member).gameResults[gameNum] === 0 ? null : state.members.get(member).gameResults[gameNum] === 1 ? (
                      <span className='text-blue-600'>WIN</span>
                    ) : (
                      <span className='text-red-600'>LOSE</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td>
                <button onClick={addGame}>+ Game</button>
              </td>
              {members.map((member) => (
                <td key={member}>{state.members.get(member).bill}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>
      {/* <section>{JSON.stringify(state)}</section> */}
    </div>
  );
};

export default Distribution;
