import user1 from '../../imagesRecepies/UserImages/user1.jpg';
import { SET_AUTH_USER } from '../Actions/actionsTypes';

const initialState = {
  id: 1,
  username: "FoodLover123",
  email: "foodlover123@example.com",
  profilePicture: user1,
  bio: "Passionate about discovering new flavors and recipes.",
  joinedDate: "2024-01-10",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
