import { createSlice } from '@reduxjs/toolkit'
import { Save } from 'lucide-react'

export const UserSlice = createSlice({
    name: 'users',
    initialState: {
        isUserAuth: false,
        userData: {}
    },
    reducers: {
        SaveUser: (state, action) => {
            state.isUserAuth = true,
                state.userData = action.payload
        },
        clearUser: (state) => {
            state.isUserAuth = false,
                state.userData = {}

        },

    }
})

export const { SaveUser, clearUser } = UserSlice.actions

export default UserSlice.reducer