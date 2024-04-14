import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        // new user has been created
        const createdAt = res.user.metadata?.creationTime;
        const user = { email, createdAt };

        // using axios
        axios.post("http://localhost:5000/users", user).then((data) => {
          console.log(data);
          if (data.data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "User Added Successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate("/");
          }
        });

        // using fetch
        // fetch("https://coffee-store-backend-d0re.onrender.com/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     if (data.insertedId) {
        //       Swal.fire({
        //         title: "Success!",
        //         text: "User Added Successfully",
        //         icon: "success",
        //         confirmButtonText: "Ok",
        //       });
        //     }
        //   });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center md:mt-24 mt-12">
      <div className="w-full max-w-sm shadow-2xl rounded-md bg-gray-300">
        <h3 className="text-4xl text-center font-mono font-semibold mt-6">
          Sign up
        </h3>
        <form onSubmit={handleSignUp} className="card-body">
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
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="space-x-3 px-1 text-sm">
            <input type="checkbox" name="" id="terms" />
            <label htmlFor="terms">Accepts our terms & Conditions</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Create</button>
          </div>
          <div className="text-center">
            <Link to="/sign-in" className="">
              <p className="hover:text-blue-500">Already have account?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
