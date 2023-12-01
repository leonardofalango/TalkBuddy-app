import { createSlice } from '@reduxjs/toolkit'
import { ChatService } from '../services/ChatService'

const userInitialState = {
    userChats : [],
}

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUserChats: (state, action) => {
            state.userChats = action.payload
        },

    }
})


export { userSlice }