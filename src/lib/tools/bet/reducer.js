const DEFAULT_GAME_RESULT = 1;

export const ACTION_TYPE = {
  addMember: 0,
  deleteMember: 1,
  addGame: 2,
  deleteGame: 3,
  updateGameResult: 4,

  updateAmount: 5,
};

const reducer = (state, action) => {
  let { amount, gameCount } = state;
  const members = new Map(state.members);

  switch (action.type) {
    case ACTION_TYPE.addMember:
      if (members.has(action.payload.newMember)) return state;
      members.set(action.payload.newMember, { gameResults: new Array(gameCount).fill(DEFAULT_GAME_RESULT), bill: 0 });
      break;
    case ACTION_TYPE.deleteMember:
      if (!members.delete(action.payload.member)) return state;
      break;
    case ACTION_TYPE.addGame:
      members.forEach(({ gameResults }) => gameResults.push(DEFAULT_GAME_RESULT));
      gameCount++;
      break;
    case ACTION_TYPE.deleteGame:
      members.forEach(({ gameResults }) => gameResults.splice(action.payload.gameNum, 1));
      gameCount--;
      break;
    case ACTION_TYPE.updateGameResult:
      const { member, gameNum } = action.payload;
      members.get(member).gameResults[gameNum] = (members.get(member).gameResults[gameNum] + 1) % 3;
      break;
    case ACTION_TYPE.updateAmount:
      amount = action.payload.amount;
      break;

    default:
      throw new Error('reducer type Error');
  }

  billCalculator(amount, gameCount, members);
  return {
    amount,
    gameCount,
    members,
  };
};

function billCalculator(amount, gameCount, members) {
  const games = [...new Array(gameCount)].map(() => ({ winners: [], losers: [] }));

  for (const [member, { gameResults }] of members) {
    gameResults.forEach((result, gameNum) => {
      if (result) games[gameNum][result === 1 ? 'winners' : 'losers'].push(member);
    });
  }
  members.forEach((memberInfo) => (memberInfo.bill = 0));
  games.forEach((game) => {
    if (game.winners.length && game.losers.length) {
      game.losers.forEach((loser) => (members.get(loser).bill -= (amount * game.winners.length) / game.losers.length));
      game.winners.forEach((winner) => (members.get(winner).bill += amount));
    }
  });
}

export default reducer;
