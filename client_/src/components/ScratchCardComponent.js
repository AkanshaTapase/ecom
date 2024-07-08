import React from 'react';
import ScratchCard from 'react-scratchcard';

const ScratchCardComponent = ({ message }) => {
  const settings = {
    width: 200,
    height: 200,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTh5dkpVB9SQbJCe_8U3c4SpOIYe_F-BB6iQ&s',
    finishPercent: 50,
  };

  return (
    <div className="scratch-card p-4 bg-gray-200 rounded-lg shadow-lg">
      <ScratchCard {...settings}>
        <div className="message flex items-center justify-center h-full text-xl font-bold text-gray-800">
          {message}
        </div>
      </ScratchCard>
    </div>
  );
};

export default ScratchCardComponent;