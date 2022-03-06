// import axios from "axios"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut

} from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
    singIn,
    singOutCurrentUser,
    loggedInUserData,
    registerFailed,
    
} from "./userSlice"


const useFirebase = () => {
    const currentUser = useSelector((state) =>state.user.currentUser);
    console.log(currentUser);
    const dispatch = useDispatch()
    const router = useRouter()
    const auth = getAuth()

    const singUpWithEmailAndPassword =(
       username,
        email,
        password,
        photoURL,
        userInfo
    
    ) =>{ 
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) =>{
      console.log(result);
        updateProfile(auth.currentUser,{
            displayName: username,
            photoURL: photoURL,
          
        });
        // saveData(userInfo);
       
    })
    // displayName: username,
    // photoURL: photoURL,
    .catch((err) =>{
        dispatch(registerFailed(err.message))
    });

};




// sing In

const logInWithEmailAndPassword = (email,password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((result) =>{
        dispatch(singIn(result.user));
        router.push("/");

    })
    .catch((err) =>{
        dispatch(registerFailed(err.message))
    });
};

// sing Out

const logOut = () =>{
    signOut(auth)
    .then(()=>{
        dispatch(singOutCurrentUser())
    })
    .catch((err)=>{
        dispatch(registerFailed(err.message))
    });
};


return{logInWithEmailAndPassword, singUpWithEmailAndPassword, logOut}

};

export default useFirebase 