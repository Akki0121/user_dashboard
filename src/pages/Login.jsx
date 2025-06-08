import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";
import Logo from "/dashboard-icon.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checkAdminLoginStatus, setCheckAdminLoginStatus] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      console.log(email === "ankit@example.com" && password === "12345");
      if (email === "ankit@example.com" && password === "12345") {
        setIsAuthenticated(true);
        setCheckAdminLoginStatus(true);
        navigate("/");
      }
    } catch (error) {
      setError("An error occurred during login.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     if (checkAdminLoginStatus) {
  //       navigate("/");
  //     }
  //   }, [checkAdminLoginStatus]);

  return (
    <div className="login bg-blend-hue flex items-center justify-center h-full">
      {/* <Helmet>
        <title>E-Commerce</title>
      </Helmet> */}

      <form
        onSubmit={handleLogin}
        className="bg-slate-800 max-h-fit p-8 rounded-xl shadow-2xl shadow-slate-400 w-96 space-y-4 flex flex-col justify-center "
      >
        <div className="flex justify-center">
          <img
            className="bg-slate-800 rounded-3xl p-1 px-2 w-1/5"
            src={Logo}
            alt="Logo"
          />
        </div>
        {/* <h2 className="text-3xl font-semibold py-5 text-center">Admin Login</h2> */}
        {error && (
          <div className="bg-red-200 text-red-600 p-3 rounded-md">{error}</div>
        )}
        <div className="relative">
          <p className="absolute left-1 top-2 h-full text-xl text-slate-600">
            <IoIosMail />
          </p>
          <input
            className="pl-8 py-2 text-slate-800 text-sm font-medium bg-slate-100 block outline-blue-400 rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="relative items-center">
          <p className="absolute left-1 top-3 h-full text-lg text-slate-600">
            <RiLockPasswordFill />
          </p>
          <input
            className="pl-8 py-2 text-slate-800 text-md font-medium bg-slate-100 block outline-blue-400 rounded-md w-full"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-0 h-full text-slate-600 text-md hover:text-slate-900"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p className="text-center text-sm text-slate-300">
          Don't have an Account ?{" "}
          <NavLink className="text-white text-md" to="/register">
            Register
          </NavLink>
        </p>
        <div className="flex justify-center mt-0">
          <button
            className={`bg-blue-600 px-12 py-2 rounded-md font-medium text-white text-md  ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
            type="submit"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
