import React from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-lightViolet 
        text-white 
        text-lg font-medium 
        px-6 py-2 rounded-full 
        hover:bg-purple-800 transition 
        duration-300 w-44"
    >
      Cargar más
    </button>
  );
};

export default LoadMoreButton;
