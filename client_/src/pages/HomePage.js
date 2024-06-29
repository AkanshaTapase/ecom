
import Layout from "../components/layout/layout";
import React, { useEffect } from 'react';
import { useAuth } from "../context/auth";

const trends = [
  { id: 1, title: 'Oversized Blazers', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8MIdqzqIMzbSlkQmZkwv9V-zEGraRPjlbw&s' },
  { id: 2, title: 'Floral Prints', img: 'https://images.glowroad.com/faceview/g3b/bh/j3i/b1e/imgs/1651220828342_16_22_Ruchi4-xlgn400x400.jpg?productId=P-6517534' },
  { id: 3, title: 'Neon Colors', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIDFz1SxQFthLQgUCn9g07u2BTbFxOEfpxQ&s' },
  { id: 4, title: 'Wide Leg Pants', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRti0JOySp8DAOoijl8anPiY1KKgpRMR1u_7w&s' },
  { id: 5, title: 'Tops', img: 'https://assets.ajio.com/medias/sys_master/root/20230628/VOtu/649bb582eebac147fc1da3e5/-473Wx593H-465833662-pink-MODEL.jpg' }
];


const HomePage = () => {
  
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const boxes = document.querySelectorAll('.trend-box');
    boxes.forEach((box, index) => {
      const animationDelay = index * 2; // Delay each box animation
      box.style.animationDelay = `${animationDelay}s`;
    });
  }, []);

  return (
    <Layout>
     <div className="flex-col">
    <div className="relative overflow-hidden h-96 bg-gray-100">
      <div className="absolute flex h-full w-[200%] animate-scroll">
        {trends.concat(trends).map((trend, index) => (
          <div
            key={index}
            className="trend-box flex flex-col items-center justify-center w-1/5 h-110 bg-red-500 text-white text-center m-2 rounded-lg shadow-lg"
          >
            <img src={trend.img} alt={trend.title} className="w-full h-80 object-cover rounded-t-lg" />
            <div className="p-2">{trend.title}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        
      `}</style>
     
    </div>
    
      
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
    </Layout>
  );
};

export default HomePage;