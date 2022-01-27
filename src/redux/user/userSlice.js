import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: "Tommy",
    highscore: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setHighscore: (state, action) => {
            state.highscore = action.payload;
        },
    },
});

export const { setId, setName, setHighscore } = userSlice.actions;

export default userSlice.reducer;
