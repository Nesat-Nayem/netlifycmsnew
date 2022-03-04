import Head from "next/head";
import { useEffect } from "react";
import {getAuth, onAuthStateChange} from "firebase/auth"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initialUserData } from "../../redux/slices/user/userSlice";
import initializeAuthentication from "../../firebase";

const Layout = ({title, children}) => {

    initializeAuthentication();
    const currentUser = useSelector((state) =>state.user.currentUser);

    const dispatch = useDispatch()
    const auth = getAuth()

    // objerver function

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChange(auth, (user) => {
    //         if(user){
    //             dispatch(initialUserData({user}));
    //         }else{
    //             dispatch(initialUserData(null))
    //         }
    //     });
    //     return () => unsubscribe;
    // }, [auth]);


 
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>{children}</main>
        </>
    );
};

export default Layout;