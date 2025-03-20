import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const CardLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cards = useSelector((state) => state.cards.cards); // ✅ Fetch from Redux
  const id = nanoid();

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-slate-900 p-10">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Card Layout</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={id} {...card} />
          ))}

          {/* Create New Card Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex flex-col items-center justify-center w-64 h-40 border-2 border-dashed border-gray-400 text-gray-600 rounded-2xl transition hover:border-blue-500 hover:text-blue-500 hover:bg-white"
          >
            <svg
              className="mb-2 w-8 h-8 text-gray-400 group-hover:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            <span className="text-lg font-medium">Create New Card</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default CardLayout;