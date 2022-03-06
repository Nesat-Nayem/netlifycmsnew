import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useFirebase from "../../../redux/slices/user/useFirebase";

const UserSingUp = () => {
  const { singUpWithEmailAndPassword } = useFirebase();

  const { register, handleSubmit } = useForm();

  const [photoURL,setPhotoURL] = useState("")
  console.log(photoURL);
  //   const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
    const userInfo = {
      ...data,
      photoURL
    };
    singUpWithEmailAndPassword(
      data.username,
      data.email,
      data.password,
      photoURL,
      userInfo
    );
  };

// Image Host


  const imageUploadFile = (e) =>{
    const imageData = new FormData()
    imageData.set("key","40468b711bf1ba60daa361d94ced9505");
    imageData.append("image", e.target.files[0])
    // console.log(imageData);
    axios
    .post("https://api.imgbb.com/1/upload", imageData)
    .then(function(response){

      // console.log(response);
      
      setPhotoURL(response.data.data.display_url)
    })
    .catch(function(error){
      // console.log(error);
    })
  }


  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold mt-10">Sing Up</h1>
      <form className="flex flex-col mt-20" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-gray-100 my-2 w-1/4 py-1 pl-2 mx-auto "
          placeholder="Your Name"
          {...register("username")}
        />

        {/* photo upload */}

        <input
          className="bg-gray-100 my-2 w-1/4 py-1 pl-2 mx-auto "
          placeholder="Photo Uplod"
          id="photoURL"
          type="file"
          {...register("photoURL")}
          onBlur={imageUploadFile}
        />



        <input
          className="bg-gray-100 my-2 w-1/4 py-1 pl-2 mx-auto "
          placeholder="Your Mail"
          {...register("email")}
        />
        <input
          placeholder="Your Password"
          className="bg-gray-100 w-1/4 py-1 pl-2 my-2 mx-auto "
          {...register("password")}
        />

        <input
          className="cursor-pointer bg-green-200 w-20 mx-auto"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UserSingUp;
