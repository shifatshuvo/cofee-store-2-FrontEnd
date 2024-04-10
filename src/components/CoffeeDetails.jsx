import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, supplierName, quantity, taste, category, details, photo } =
    coffee;

  return (
    <div>
      <div className="flex justify-center md:mt-24 mt-16">
        <div className="md:flex-row items-center flex flex-col justify-center bg-gray-200 rounded-md shadow-md">
          <div className="w-2/4">
            <img
              style={{ width: "500px" }}
              className=""
              src={photo}
              alt={`photos of ${name}`}
            />
          </div>
          <div className="w-4/5 ml-20 my-6 md:my-2 space-y-2">
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
            <p className="text-gray-500 font-bold">
              <span className="font-bold text-gray-700">Category: </span>
              {category}
            </p>
            <p className="text-gray-500 font-bold">
              <span className="font-bold text-gray-700">Details: </span>
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
