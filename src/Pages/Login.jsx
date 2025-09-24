import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../Config/AxiosInstance";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SaveUser } from "../features/Users/UserSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const res = await AxiosInstance.post("/user/login", data);
      dispatch(SaveUser(res.data.newUser))
          toast.success('Successfully Logged')
          toast('Welcome!', {
            icon: '👏',
          });
          setTimeout(() => navigate("/user/profile"), 2000)
      reset(); // clear form

    } catch (error) {
      console.error("Login Error ===", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <Toaster position="top-center" reverseOrder={false} />
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-black"
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

