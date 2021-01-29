export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  //  "BQB1qKmYOL82A1WNmfqrpZ9HZDEMnOvx6D2TPoK6jOB6cKTzXgeMNw02NFOPnYadswrAqsjR11HyEWqC1AeLm-SM8Dhb7NDmB1XME4-YDjfZvjDsl6G1f5txX8FZkHn3pYoi6rids8oA9NwQaaMlaXmPDAlFYzpMM3ac_FeuZ4EPfHSRVX0x",
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
