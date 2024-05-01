import React from "react";
import Cards from "./cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="py-28 pb-4 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here :)</span>{" "}
          </h1>
          <p className="py-12">
            Welcome to our book buying section, where you can discover a
            treasure trove of captivating reads available for purchase. Dive
            into a world of literature and explore our curated selection of paid
            books, carefully selected to cater to diverse tastes and interests
          </p>
          <Link to="/">
            <button className=" bg-pink-500 text-white px-3 py-2 pb-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
