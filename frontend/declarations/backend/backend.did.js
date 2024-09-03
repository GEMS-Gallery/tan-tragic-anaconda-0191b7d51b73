export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getGameHistory' : IDL.Func([], [IDL.Text], ['query']),
    'updateGameHistory' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
