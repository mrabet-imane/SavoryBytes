import user1 from "../../imagesRecepies/UserImages/user1.jpg";
import user2 from '../../imagesRecepies/UserImages/user2.jpg';
import user3 from '../../imagesRecepies/UserImages/user3.jpg';
import { SET_PROFILE } from '../Actions/actionsTypes';

const initialDataUser = [
  {
    id: 1,
    username: "FoodLover123",
    email: "foodlover123@example.com",
    profilePicture: user1,
    bio: "Passionate about discovering new flavors and recipes.",
    joinedDate: "2024-01-10",
  },
  {
    id: 2,
    username: "CulinaryExplorer",
    email: "culinaryexplorer@example.com",
    profilePicture: user2,
    bio: "Exploring the world one dish at a time.",
    joinedDate: "2023-08-22",
  },
  {
    id: 3,
    username: "HealthyEater",
    email: "healthyeater@example.com",
    profilePicture: user3,
    bio: "Dedicated to healthy and delicious cooking.",
    joinedDate: "2024-03-17",
  },
];

const reducerUser = (state = initialDataUser, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, ...action.payload } // Update user
          : user // Keep other users unchanged
      );
    default:
      return state;
  }
};

export default reducerUser;
