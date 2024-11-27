import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Mark the user as authenticated
    navigate("/home");
  };

  return (
    <div className="bg-white grid items-center justify-center h-screen font-bold">
      <div className="bg-gray-200 flex flex-col gap-4 border-2 p-[40px] rounded-xl">
        <h1 className="text-3xl">Login</h1>
        <p>Welcome Back!</p>
        <input
          type="text"
          placeholder="Username"
          className="text-black outline-none border-none rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-black outline-none border-none rounded-lg"
        />
        <button
          className="bg-black text-white py-2 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="text-md">
          <a href="#">Forgot Password</a>
          <p className="font-normal">
            Don't have an account?{" "}
            <a
              className="font-bold text-black cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
