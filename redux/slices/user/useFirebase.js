// import axios from "axios"

import {
    getAuth,
    createUserWithEmailAndPassword,
    singInWithEmailAndPassword,
    singOut

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

    const dispatch = useDispatch()
    const router = useRouter()
    const auth = getAuth()

    const singUpWithEmailAndPassword =(
        username,
        email,
        password,
        photoUrl
    ) =>{ 
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) =>{
        updateProfile(auth.currentUser,{
            displayName: username,
            photoUrl: photoUrl,
        });
        saveData(userInfo);
    })
    
    .catch((err) =>{
        dispatch(registerFailed(err.message))
    });

};




// sing In

const logInWithEmailAndPassword = (email,password) =>{
    singInWithEmailAndPassword(auth,email,password)
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
    singOut(auth)
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