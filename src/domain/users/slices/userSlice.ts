import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../types';

interface FavoriteUser {
  favoriteUsers: User[];
}
const initialState:FavoriteUser = {
  favoriteUsers: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserToFavorites: (state, action: PayloadAction<User>) => {
      const userToAdd = action.payload;
      // Check if the user is already in the list
      const existingUser = state.favoriteUsers.find(user => user.id === userToAdd.id);
      if (!existingUser) {
        state.favoriteUsers.push(userToAdd);
      }
    },
    removeUserFromFavorites: (state, action: PayloadAction<number>) => {
      const userIdToRemove = action.payload;
      // Filter out the user with the given id
      state.favoriteUsers = state.favoriteUsers.filter(user => user.id !== userIdToRemove);
    },
  },
});

export const { addUserToFavorites, removeUserFromFavorites } = userSlice.actions;
export default userSlice.reducer;
