import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ViewersCoffeeCard = ({ coffee }) => {
  const { _id, name, supplierName, quantity, taste, photo } = coffee;

  return (
    <div className="flex justify-center m-4">
      <div className="w-full flex items-center justify-between space-x-4 md:px-6 px-3 py-4 rounded-md bg-gray-200 shadow-md">
        <div>
          <img className="-w-40 -h-52" src={photo} alt="" />
        </div>
        <div className="md:w-1/2 w-2/3 text-left">
          <p className="text-gray-500 font-bold">
            <span className="font-bold text-gray-700">Name: </span> {name}
          </p>
          <p className="text-gray-500 font-bold">
            <span className="font-bold text-gray-700">Supplier: </span>
            {supplierName}
          </p>
          <p className="text-gray-500 font-bold">
            <span className="font-bold text-gray-700">Quantity: </span>
            {quantity}
          </p>
          <p className="text-gray-500 font-bold">
            <span className="font-bold text-gray-700">Taste: </span>
            {taste}
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <Link
            to={`coffee-details/${_id}`}
            className="bg-green-500 hover:bg-green-600 text-gray-50 p-3 rounded-md"
          >
            <FaEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

ViewersCoffeeCard.propTypes = {
  coffee: PropTypes.object,
};

export default ViewersCoffeeCard;
