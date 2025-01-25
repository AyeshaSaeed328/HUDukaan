import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap p-5 m-16">
      
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          className="animate-pulse bg-white rounded-lg shadow-md p-4 m-4 w-[300px] h-[350px] hover:shadow-2xl hover:cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out"
          key={index}
        >
          <div className="w-full h-[200px] bg-slate-200 rounded-md mb-4"></div>
          <div className="h-4 bg-slate-200 rounded-md mb-2"></div>
          <div className="h-4 bg-slate-200 rounded-md mb-2"></div>
          <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
