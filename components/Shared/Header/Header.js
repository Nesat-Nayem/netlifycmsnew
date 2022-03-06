import Link from "next/link";
import {Popover, Transition } from "@headlessui/react"
 import {MenuIcon, XIcon} from "@heroicons/react/outline"
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from "next/router"
import useFirebase from "../../../redux/slices/user/useFirebase";

const pages = [
    { 
        name: "Home",
        href: "/" 
    },

    {
      name: "Event",
      href: "/event",
    },
    {
      name:"Sing Up",
      href:"/singup"
    }
  ];


const Header = () => {

  const router = useRouter()
  const currentUser = useSelector((state) => state.user.currentUser);
  // console.log(currentUser);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  // console.log(loggedInUser);



  const [isOpen, setIsOpen] = useState(false);
  // const logInUser = useSelector((state) => state.user.logInUser)
  // console.log(logInUser);
  const dispatch = useDispatch();
  const { logOut } = useFirebase();
  const logOutHandler = () => {
    dispatch(logOut);
    setIsOpen(!isOpen);
  };

  return (
    <Popover className=" bg-white py-5">

        <div className="">  

<div className="flex relative justify-between">

      <div className="ml-3 text-xl mt-3">UpTal Community</div>

<div className="flex flex-end">
      <Popover.Group as="nav" className="mr-3 flex">

    <div className="mt-3">
        <Link href="/">
          <a className="mr-1">Home</a>
        </Link>

        <Link href="/event">
          <a className="mr-1">Event</a>
        </Link>

      {
        currentUser?.email ? <div></div> :  <Link href="/SingIn">
        <a className="mr-1">Sing In</a>
      </Link>
      }

</div>

        {/* {currentUser?.email ? (
          <button className="mb-6 mr-3" onClick={logOutHandler}>
            logout
          </button>
        ) : (
          <div>
            {" "}
            <Link href="/SingIn">
              <a className="">Login</a>
            </Link>{" "}
          </div>
        )} */}

        {currentUser && (
          <>
            <button onClick={() => setIsOpen(!isOpen)} className="flex  item-center">
              <img
                src={currentUser?.photoURL}
                className="w-12 h-12 ring-2 ring-green-500 ml-4"
                style={{ borderRadius: "50%" }}
              />
            </button>
          </>
        )}

        {/* <p className="mt-2">{currentUser?.displayName}</p> */}
      </Popover.Group>
      </div>
      </div>



        {/* open popup */}

            <div 
            className={
                isOpen 
                ? "bg-white md:block hidden shadow-md w-56 absolute z-10 rounded mt-3 right-6" : "hidden"
            }>

                <button onClick={()=> router.push("/Profile")}
                className="flex item-center hover:bg-slate-100 py-2 px-5 w-full"
                >

            <img src={currentUser?.photoURL}
            
            className="w-10 h-10 mr-2 border"
            style={{borderRadius:"50%"}}
            alt="" />

                <p>
                    <p className="ml-5 mt-2 font-bold">{currentUser?.displayName}</p>
                    <p></p>
                </p>

                </button>

           

                <button className="pl-3 py-3 hover:bg-slate-100 w-full" 
                onClick={logOutHandler}
                >
                    Log out
                </button>


            </div>


      </div>

                {/* rangisiton */}

                <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >


              <Popover.Panel focus
              
              className="relative bottom-20 insert-x-0 p-2 transition transform origin-top-right lg:hidden ">


                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">

        {/* here */}

                        <div className="pt-5 px-5 pb-6">

                        <div className="flex item-center justify-between">
                        <div >

                                <Link href="/">
                                <a className="flex item-center">
                        <span>uptal community</span>

                                </a>
                                
                                </Link>

                                </div>



                                <div className="-mr-2 ">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ">

                                        <span className="sr-only "> Close menu </span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"  />

                                    </Popover.Button>

                                </div>
                    
                        </div>

                        {/* singup singin */}

                        <div className="mt-6">
                <nav className="grid gap-y-8">
                  {pages.map((item) => (
                    
                    <Link key={item.name} href={item.href}>
                     
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
                        {/* singup singin */}


                        </div>
                     
                 

                    {/* sing up sing in second */}

                    <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="/signup">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign up
                  </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link href="/signin">
                    <a className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
                    {/* sing up sing in second */}

              
                </div>


              </Popover.Panel>
            </Transition>


    </Popover>
  );
};

export default Header;
