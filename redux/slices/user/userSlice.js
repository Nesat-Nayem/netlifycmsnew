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
                const{ displayName, email, photoURL}  = action?.payload?.user;
                return{
                    ...state,
                    loading:false,
                    currentUser:{displayName, email, photoURL},
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

        registerFailed:(state,action) =>{
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

        logInUserData:(state,action) =>{
            return{
                ...state,
                loggedInUser:action.payload,
            };
        },

        singOutCurrentUser: (state, action) =>{
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