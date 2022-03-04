import Link from "next/link";
import { useSelector } from "react-redux";

const Header = (loggedInUser) => {
    console.log(loggedInUser?.username);
    // const logInUser = useSelector((state) => state.user.logInUser)
    // console.log(logInUser);
    return (
        <div className=" py-5 bg-gray-300 flex justify-between">
            <div className="ml-3 text-xl">UpTal Community</div>
            <div className="mr-3">
             
               <Link href="/">
               <a className="mr-1">Home</a>
               </Link>

               <Link href="/event">
               <a className="mr-1">Event</a>
               </Link>

            
               <Link href="/SingIn">
               <a className="">Login</a>
               </Link>
             
           
            </div>
        </div>
    );
};

export default Header;