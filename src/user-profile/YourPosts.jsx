import { useLoaderData } from "react-router-dom";
// import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import CoffeeCard from "../components/CoffeeCard";

const YourPosts = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="text-center">
      <h2 className="text-3xl">Available Coffees: {coffees.length}</h2>
      <div className="grid md:grid-cols-2 gap-2 my-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default YourPosts;
