import Link from "next/link";
import UserSingIn from "../components/authentication/UserSingIn/UserSingIn";
import Header from "../components/Shared/Header/Header";

const SingIn = () => {
    return (
        <div>
            <Header />
            <UserSingIn/>

            <Link href="/SingUp">
            <a className="text-center text-xl"> crete new account click here</a>
            </Link>
        </div>
    );
};

export default SingIn;