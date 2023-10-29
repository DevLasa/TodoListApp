import {
  ADD_TODO,
  APP_AUTHANTICATE,
  DELETE_TODO,
  UPDATE_TODO,
} from "../actions/Types";

const initialState = {
  data: [],
  isAuthanticate: false,
};

// Use the initialState as a default value
export default function todoReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case APP_AUTHANTICATE: {
      return {
        ...state,
        isAuthanticate: action.payload,
      };
    }
    case ADD_TODO:
      return {
        ...state,
        data: [
          {
            id: action.payload.id,
            value: action.payload.data,
            color: action.payload.color,
          },
          ...state.data,
        ],
      };
    case DELETE_TODO: {
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload.id),
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        data: state.data.map((data) => {
          return {
            ...data,
            value:
              data.id === action.payload.id ? action.payload.data : data.value,
          };
        }),
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
