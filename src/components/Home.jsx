import { useLoaderData } from "react-router-dom";
import ViewersCoffeeCard from "./ViewersCoffeeCard";

const Home = () => {
  const coffees = useLoaderData();

  return (
    <div className="text-center">
      <h2 className="text-3xl">Available Coffees: {coffees.length}</h2>
      <div className="grid md:grid-cols-2 gap-2 my-4">
        {coffees.map((coffee) => (
          <ViewersCoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
