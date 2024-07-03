import React, { useState, useEffect } from 'react';

const DiscountRibbon = ({ couponCode, couponDescription, duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="relative bg-black text-white px-4 py-1 h-12 rounded-lg overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-celebration bg-cover bg-center animate-pulse"></div>
      <div className="relative z-10 flex items-center space-x-10">
        <div className="text-lg font-bold uppercase">Coupon Code: {couponCode}</div>
        <div className="text-lg font-bold uppercase">   {couponDescription}  </div>
        <div className="text-lg uppercase">Expires in: <span className="font-mono">{formatTime(timeLeft)}</span></div>
      </div>
    </div>
  );
};

export default DiscountRibbon;
