import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div>
      <div className="bg-gray-300">
        <NavBar />
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
