import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplierName, quantity, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.coffeeName.value;
    const supplierName = form.supplierName.value;
    const quantity = form.quantity.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = {
      name,
      supplierName,
      quantity,
      taste,
      category,
      details,
      photo,
    };
    console.log(coffee);

    // send data to server
    fetch(`https://coffee-store-backend-d0re.onrender.com/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="flex justify-center">
      <div className="md:w-3/5 w-5/6 md:mt-16 mt-8 p-8 flex justify-center rounded-md shadow-xl bg-gray-300">
        <div className=" space-y-5 text-center">
          <h3 className="text-3xl font-serif font-bold text-center">
            Update Coffee
          </h3>
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="coffeeName"
                  className="grow"
                  placeholder="Coffee Name"
                  defaultValue={name}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="supplierName"
                  className="grow"
                  placeholder="Supplier Name"
                  defaultValue={supplierName}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="number"
                  name="quantity"
                  className="grow"
                  placeholder="Available Quantity"
                  defaultValue={quantity}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="taste"
                  className="grow"
                  placeholder="Taste"
                  defaultValue={taste}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="category"
                  className="grow"
                  placeholder="Category"
                  defaultValue={category}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="details"
                  className="grow"
                  placeholder="Details"
                  defaultValue={details}
                />
              </label>
              <label className="input input-bordered flex md:col-span-2 items-center gap-2">
                <input
                  type="text"
                  name="photo"
                  className="grow"
                  placeholder="Photo URL"
                  defaultValue={photo}
                />
              </label>
            </div>
            <input
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 mt-8 rounded-md cursor-pointer"
              value="Update Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
