import React from "react";

function cards({ item }) {
  return (
    <>
      <div className="mt-9 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body bg-white text-black">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" hover:bg-pink-500 hover:text-white px-2 py-1 cursor-pointer rounded-full border-{2px}">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cards;
