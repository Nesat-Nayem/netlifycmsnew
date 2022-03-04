import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        loading:false,
        currentUser:null,
        error:null,
        loggedInUser:null
    },
    reducers:{
        initialUserData:(state, action) =>{
            if(action.payload){
                const{
                    displayName,photoUrl, email
                } = action?.payload?.user;
                return{
                    ...state,
                    loading:false,
                    currentUser:{displayName, photoUrl, email}
                };
            }else{
                return{
                    ...state,
                    loading:false,
                    currentUser:null
                }
            }
        },
        
        registerUser: (state, action) =>{
            return{
                ...state,
                loading:false,
                error:null,
                currentUser:action.payload
            };
        },

        registerFailed:(action, state) =>{
            return {
                ...state,
                error:action.payload,
            };
        },

        singIn: (state,action) =>{
            return{
                ...state,
                loading:false,
                error:null,
                currentUser:action.payload,
            };
                },

        logInUserData:(action,state) =>{
            return{
                ...state,
                loggedInUser:action.payload,
            };
        },

        singOutCurrentUser: (action,state) =>{
            return {
                ...state,
                error:null,
                currentUser:null,
            };
        },

    }
})

export const {
    initialUserData,
    registerUser,
    registerFailed,
    singIn,
    logInUserData,
    singOutCurrentUser
} = userSlice.actions;

export default userSlice.reducer