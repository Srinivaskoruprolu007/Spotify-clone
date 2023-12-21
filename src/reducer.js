export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   Remove this after development....

  fav_songs: null,
};

const reducer = (state, action) => {
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
    case "SET_TOP_SONGS":
      return {
        ...state,
        fav_songs: action.fav_songs,
      };
    default:
      return state;
  }
};

export default reducer;
