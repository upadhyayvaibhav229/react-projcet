import React from "react";
import { useDispatch } from "react-redux";
import { delCard } from "../Featuers/CardSlice";

const Card = ({ id, image, title, desc }) => {
  const dispatch = useDispatch();

  function removeCard(id) {
    dispatch(delCard({ id }));
  }

  return (
    <div className="max-w-sm bg-slate-800 shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        <p className="text-gray-300 mt-2">{desc}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
        <button
          onClick={() => removeCard(id)}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg ml-2 hover:bg-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;