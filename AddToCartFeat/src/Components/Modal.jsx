import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../Featuers/CardSlice";

const Modal = ({ isOpen, setIsModalOpen }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleAddCard = () => {
    if (!title || !desc || !image) return alert("All fields are required");

    dispatch(addCard({ title, desc, image }));
    setTitle("");
    setDesc("");
    setImage(null);
    setIsModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[50%] h-[50%] p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Card</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            ✖
          </button>
        </div>

        {/* Form */}
        <input
        // key={id}
          type="text"
          placeholder="Title"
          className="border w-full p-2 mb-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border w-full p-2 mb-2 rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <input
          type="file"
          className="mb-2"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={handleAddCard}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
