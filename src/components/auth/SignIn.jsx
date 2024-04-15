import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";

const SignIn = () => {
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };

        // using axios
        axios.patch("http://localhost:5000/users", user).then((data) => {
          if (data.data.acknowledged) {
            Swal.fire({
              title: "Success!",
              text: "Successfully Logged in",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center md:mt-24 mt-12">
      <div className="w-full max-w-sm shadow-2xl rounded-md bg-gray-300">
        <h3 className="text-4xl text-center font-mono font-semibold mt-6">
          Sign In
        </h3>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute right-3 top-12 text-xl cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </span>
            <label className="label">
              <div className="label-text-alt link link-hover">
                Forget Password?
              </div>
            </label>
          </div>
          <div className="space-x-3 px-1 text-sm">
            <input type="checkbox" name="" id="terms" />
            <label htmlFor="terms">Accepts our terms & Conditions</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="text-center">
            <Link to="/sign-up" className="">
              <p className="hover:text-blue-500">Create new account</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
