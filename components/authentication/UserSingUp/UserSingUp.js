import { useForm } from "react-hook-form";
import useFirebase from "../../../redux/slices/user/useFirebase";

const UserSingUp = () => {
    const {singUpWithEmailAndPassword} = useFirebase();

  const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
     const userInfo = {
          ...data,
      };
      singUpWithEmailAndPassword(
          data.username,
          data.email,
          data.password,
          userInfo
      )
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
