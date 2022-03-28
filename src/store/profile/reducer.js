import { AUTH_PROFILE, TOGGLE_PROFILE } from "./actions";

const initialState = {
  visible: false,
  name: "default name",
  isAuth: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case AUTH_PROFILE: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }
    default: {
      return state;
    }
  }
};
