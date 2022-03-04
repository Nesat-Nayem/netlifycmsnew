import Link from "next/link";
import UserSingUp from "../components/authentication/UserSingUp/UserSingUp";
import Header from "../components/Shared/Header/Header";

const SingUp = () => {
    return (
        <div>
            <Header />
            <UserSingUp />
            <Link href="/SingIn">
            <a className="text-xl"> already have an account</a>
            </Link>
        </div>
    );
};

export default SingUp;