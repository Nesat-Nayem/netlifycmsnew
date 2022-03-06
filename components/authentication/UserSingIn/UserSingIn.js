import { useForm } from "react-hook-form";
import useFirebase from "../../../redux/slices/user/useFirebase";

const UserSingIn = () => {
  const {logInWithEmailAndPassword} = useFirebase();




    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = data => {
      logInWithEmailAndPassword(data.email, data.password)
    }
  
    // console.log(watch("example"));
    
  return (
    <div className="">
        <h1 className="text-2xl text-center font-bold mt-10">Sing In</h1>
    <form className="flex flex-col mt-20" onSubmit={handleSubmit(onSubmit)}>
   
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

export default UserSingIn;
