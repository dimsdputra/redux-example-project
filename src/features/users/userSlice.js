import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Dimas'},
    {id: '1', name: 'Dwi'},
    {id: '2', name: 'Putra'},
]

const userSlice = createSlice({
    name: 'users', 
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users
export default userSlice.reducer