import Head from "next/head";
import { useEffect } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initialUserData } from "../../redux/slices/user/userSlice";
import initializeAuthentication from "../../firebase";

const Layout = ({title, children}) => {

    initializeAuthentication();
    const currentUser = useSelector((state) =>state.user.currentUser);
console.log(currentUser);


    const dispatch = useDispatch()
    const auth = getAuth()

    // objerver function

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(initialUserData({ user }));
          } else {
            dispatch(initialUserData(null));
          }
        });
        return () => unsubscribe;
      }, [auth]);


 
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