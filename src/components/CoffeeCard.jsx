import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplierName, quantity, taste, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

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
          <Link to={`coffee-details/${_id}`} className="bg-green-500 hover:bg-green-600 text-gray-50 p-3 rounded-md">
            <FaEye />
          </Link>
          <Link to={`update-coffees/${_id}`} className="bg-gray-700 hover:bg-gray-800 text-gray-50 p-3 rounded-md">
            <MdEdit />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-gray-50 p-3 rounded-md"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func
}

export default CoffeeCard;
