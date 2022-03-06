import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const currentUser = useSelector((state)=>state.user.currentUser)
    console.log(currentUser);
    return (

       

            <div>
                <img className="relative" style={{ borderRadius: "50%", width:"200px", height:"200px", left:"530px", top:"50px" }} src={currentUser?.photoURL} alt="" />
                <h1 className='text-center mt-24 text-2xl font-bold mr-6'>{currentUser?.displayName}</h1>
            </div>

     
    );
};

export default UserProfile;