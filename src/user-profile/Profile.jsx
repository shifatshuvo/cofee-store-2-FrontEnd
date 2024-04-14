import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProviders";

const Profile = () => {
  const users = useContext(AuthContext);
  return (
    <div className="flex justify-center mt-16">
      <div className="md:w-1/3 w-2/3 bg-purple-300 text-center rounded-md p-6 space-y-2 shadow-md">
        <h3 className="text-3xl">User Profile</h3>
        <hr />
        <p className="text-cl font-semibold">email: {users.user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
