import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../Config/AxiosInstance";
import { useDispatch } from "react-redux";
import { SaveUser } from "../features/Users/UserSlice";

export default function Register() {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    try {
      console.log("datass===",data)
      await AxiosInstance.post('/user/register', data)
        .then(res => {
          console.log(res.data)
          dispatch(SaveUser(res.data.newUser))
          setTimeout(()=>navigate("/user/profile"),2000)
        }).catch(err => {
          console.log("registerError ===", err.message)
        })
    } catch (error) {
      console.log("Onsubmit error===",error.message)

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Phone"
            {...register("phone")}
            className="input input-bordered w-full"
          />

          <input
            type="number"
            placeholder="Age"
            {...register("age")}
            className="input input-bordered w-full"
          />

          <select
            {...register("gender", { required: true })}
            className="select select-bordered w-full"
            defaultValue=""
          >
            <option value="" disabled>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>


        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div >
    </div >
  );
}
