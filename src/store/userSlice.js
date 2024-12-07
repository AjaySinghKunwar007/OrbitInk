import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload;
    },
    removeUser: (state) => {
      state.userData = null;
    },
  },
});

export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer;
